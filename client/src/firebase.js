import firebase from 'firebase/compat/app' // v9 compatability to work with Jeft/Fireship's v8 methods
import { useAuthState } from 'react-firebase-hooks/auth'
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

// Initialize Firebase - v8
firebase.initializeApp(firebaseConfig)

// Initialize Firebase - v9
// import { initializeApp } from 'firebase/app'
// const firebaseApp = initializeApp(firebaseConfig)

// v8 method
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()

// v9 method
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth'

// const auth = getAuth()

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
  const [user] = useAuthState(auth)
  const [username, setUserName] = useState(null)

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe

    if (user) {
      const ref = firestore.collection('users').doc(user.id)
      unsubscribe = ref.onSnapshot((doc) => {
        setUserName(doc.data()?.username)
      })
    } else {
      setUserName(null)
    }

    return unsubscribe
  }, [user])

]  return { user, username }
}
