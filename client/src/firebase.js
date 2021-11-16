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
import { getFirestore, addDoc, setDoc, doc, collection } from 'firebase/firestore'

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
      return saveFirebaseUserDataToMongoDb(firebaseResultData)
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
      console.error(error)
      throw new Error('firebase-loginWithGooglePopup.')
    })
}

// Custom hook to read Firebase auth record and user profile doc
export function useUserData() {
  // the currentUser object has a lot of info (including accessToken)
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  return { currentUser }
}
