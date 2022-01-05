import { useEffect, useState } from 'react'
import axios from 'axios'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import {
  getFirestore,
  addDoc,
  setDoc,
  doc,
  collection,
  serverTimestamp,
  onSnapshot,
  get,
  updateDoc,
  arrayUnion,
  arrayRemove
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function logout() {
  return signOut(auth)
}

async function saveUserDataToFirestore(firebaseResultData, mongoData) {
  const {
    uid,
    providerId,
    displayName,
    email,
    emailVerified,
    isAnonymous,
    phoneNumber,
    photoURL,
    metadata,
    providerData
  } = firebaseResultData.user

  try {
    // login activity log
    await addDoc(collection(firestore, 'auth-activity-log'), {
      operationType: firebaseResultData.operationType,
      providerId,
      displayName,
      email,
      timestamp: serverTimestamp(),
      mongoId: mongoData.user.id
    })

    // overwrite/write user record
    await setDoc(doc(firestore, 'users', firebaseResultData.user.uid), {
      uid,
      providerId,
      displayName,
      email,
      emailVerified,
      isAnonymous,
      phoneNumber,
      photoURL,
      metadata: { ...metadata },
      providerData,
      mongoId: mongoData.user.id
    })
  } catch (error) {
    console.error('ERROR writing to firebase.', error)
    throw new Error('ERROR writing to firebase.')
  }
}

async function saveFirebaseUserDataToMongoDb(firebaseResultData) {
  try {
    const mongoResponse = await axios.post('/v1/auth/firebase-login', {
      firebaseToken: firebaseResultData.user.accessToken
    })
    return {
      user: mongoResponse.data.user,
      accessToken: mongoResponse.data.tokens.access.token,
      refreshToken: mongoResponse.data.tokens.refresh.token
    }
  } catch (error) {
    logout()
    throw new Error('Error posting to server.Mongo.')
  }
}

export function loginWithEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((firebaseResultData) => {
      return saveFirebaseUserDataToMongoDb(firebaseResultData)
    })
    .catch((error) => {
      logout()
      throw new Error('Error posting to server.Mongo.')
    })
}

export function loginWithGooglePopup() {
  const provider = new GoogleAuthProvider()
  provider.addScope('profile')
  provider.addScope('email')
  return signInWithPopup(auth, provider)
    .then(async (firebaseResultData) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result)
      // const token = credential.accessToken
      // this `credential` object is type OAuthCredential.  It only contains:
      // idToken, accessToken, pendingToken: null, providerId: "google.com", signInMethod: "google.com"
      // the idToken and accessToken --> I don't think I need these.

      // ---
      // But the `result` object contains all the user data I need, including the token which I can use on the backend server to also get all of the user data just with the token.
      // const { operationType, providerId, user } = result // the additional data i don't need and some is duplicate
      // const firebaseUID = user.uid
      // saveUserDataToDb(result)

      const mongoData = await saveFirebaseUserDataToMongoDb(firebaseResultData)
      saveUserDataToFirestore(firebaseResultData, mongoData)
      return mongoData
    })
    .catch((error) => {
      // The provider's account email, can be used in case of
      // auth/account-exists-with-different-credential to fetch the providers
      // linked to the email:
      // const email = error.email
      // // Handle Errors here.
      // const errorCode = error.code
      // const errorMessage = error.message
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error)
      // // The provider's credential:
      // // ...

      // TODO:
      // signout, because the Mongo login failed
      logout()
      console.error(`User closed Google login popup/cancelled login`, error)
    })
}

// Custom hook to read Firebase auth record and user data
export function useUserDataFirebase() {
  // the currentUserFirebase object has a lot of info (including accessToken)
  const [currentUserFirebase, setCurrentUserFirebase] = useState()
  const [favorites, setFavorites] = useState([])
  const [progress, setProgress] = useState({})

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUserFirebase(user)
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    if (!currentUserFirebase) {
      setFavorites([])
      return
    }
    const unsubscribe = onSnapshot(doc(firestore, 'user-data', currentUserFirebase.uid), (doc) => {
      try {
        const favorites = doc?.data()?.favorites
        setFavorites(favorites || [])
      } catch (error) {
        setFavorites([])
      }
    })
    return unsubscribe
  }, [currentUserFirebase])

  useEffect(() => {
    if (!currentUserFirebase) {
      setProgress([])
      return
    }
    const unsubscribe = onSnapshot(doc(firestore, 'user-data', currentUserFirebase.uid), (doc) => {
      try {
        const progress = doc?.data()?.progress
        setProgress(progress || [])
      } catch (error) {
        setProgress([])
      }
    })
    return unsubscribe
  }, [currentUserFirebase])

  return { currentUserFirebase, favorites, progress }
}

export async function setFavorite(item, userId) {
  const ref = doc(firestore, 'user-data', userId)
  await updateDoc(ref, {
    favorites: arrayUnion(item.title)
  })
}

export async function unsetFavorite(item, userId) {
  const ref = doc(firestore, 'user-data', userId)
  await updateDoc(ref, {
    favorites: arrayRemove(item.title)
  })
}

export async function setProgress(item, userId, progress) {
  console.log(item, userId, progress)
  const ref = doc(firestore, 'user-data', userId)
  if (progress === 0) {
    progress = 1
  } else if (progress === 1) {
    progress = 2
  } else {
    progress = 0
  }
  await updateDoc(ref, {
    ['progress.' + `${item.title}`]: progress // eslint-disable-line no-useless-concat
  })
}
