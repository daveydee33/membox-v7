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
import { useEffect, useState } from 'react'

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

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

export function logout() {
  return signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    })
}

export function loginWithGooglePopup() {
  const provider = new GoogleAuthProvider()
  provider.addScope('profile')
  provider.addScope('email')
  return signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      // TODO: maybe middleware to DB store the `user` object data?
      //  user.uid --> this is the Firebase UID (all providers will have this)
      //  user.providerData.uid --> this is the UID from Google
      //  user, user.accessToken, displayName, email, emailVerified, isAnonymous, phoneNumber, photoURL, providerId, uid
      // maybe call another function and pass the "user" object to it, and in that function, save all the data to Mongo
    })
    .catch((error) => {
      // The provider's account email, can be used in case of
      // auth/account-exists-with-different-credential to fetch the providers
      // linked to the email:
      const email = error.email
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)
      // The provider's credential:
      // ...
    })
}

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [currentUser, setCurrentUser] = useState()
  // const [username, setUserName] = useState(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)

      if (user) {
        // and link the other data?  add username or mongoDb id to this?
        const collectionRef = collection(firestore, 'login-activity')
        const docRef = doc(firestore, `all-users/${user.uid}`)

        // Add a record each time there is a login/authentication (even if they do a full refresh on the page, it will trigger this.)
        // the `user` object that comes back from the onAuthStateChanged for some reason can't be used to set the data in Firestore... not sure, but this is a hack that worked
        const userObjectPayload = JSON.parse(JSON.stringify(user))
        delete userObjectPayload.stsTokenManager
        addDoc(collectionRef, userObjectPayload)

        // Set/Update user database?
        setDoc(docRef, userObjectPayload)
      }
    })
    return unsub
  }, [])

  return { currentUser }
}
