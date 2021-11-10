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

async function activityLog(authResponseResultObject) {
  // authResponseResultObject is the `result` from the firebase functions like signInWithEmailAndPassword or loginWithGooglePopup
  // this result should have:
  // operationType: "signIn"
  // providerId: null (or "google.com")
  // user: --> this has all the data, including the token, which can be used on the server also to get the same user data as this here.

  // so let's save it to Firebase
  try {
    const collectionRef = collection(firestore, 'login-activity')
    const docRef = doc(firestore, `all-users/${authResponseResultObject.user.uid}`)

    // Add a record each time there is a login/authentication (even if they do a full refresh on the page, it will trigger this.)
    // the `user` object that comes back from the onAuthStateChanged for some reason can't be used to set the data in Firestore... not sure, but this is a hack that worked
    const userObjectPayload = JSON.parse(JSON.stringify(authResponseResultObject.user))
    // delete userObjectPayload.stsTokenManager // we don't need to store the tokens in Firebase
    addDoc(collectionRef, userObjectPayload)

    // Set/Update user database?
    setDoc(docRef, userObjectPayload)
  } catch (err) {
    throw new Error('Error posting to server.1.')
  }

  console.log(authResponseResultObject)
  // save to MongoDB
  try {
    const res = await axios.post('/v1/auth/firebase-login', undefined, {
      headers: { Authorization: `Bearer ${authResponseResultObject.user.accessToken}` }
    })
    console.log('zzz:B - success to MongoDB', res)
  } catch (error) {
    console.log('zzz:B - Error ', error)
    throw new Error('Error posting to server.2.')
  }
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password).then((result) => {
    // result has something like:
    //operationType: "signIn"
    //providerId: null
    // user: UserImpl {providerId: 'firebase', emailVerified: false, isAnonymous: false, tenantId: null, providerData: Array(1), …}
    // _tokenResponse: {kind: 'identitytoolkit#VerifyPasswordResponse', localId: 'M1JljjWEdJgNgDAPmwmylxWvpO42', email: 'a@a.com', displayName: '', idToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY5NGNmYTAxOTgyMDNlMj…3aT2RmJieaCPpuBtlND-kAMMdNd1z3tp7SxVlC0NMtZBcgOsw', …}
    activityLog(result)
  })
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
  signInWithPopup(auth, provider)
    .then(async (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      // this `credential` object is type OAuthCredential.  It only contains:
      // idToken, accessToken, pendingToken: null, providerId: "google.com", signInMethod: "google.com"
      // the idToken and accessToken --> I don't think I need these.

      // ---
      // But the `reseult` object contains all the user data I need, including the token which I can use on the backend server to also get all of the user data just with the token.
      const { operationType, providerId, user } = result // the additional data i don't need and some is duplicate
      const firebaseUID = user.uid

      activityLog(result)

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
  // the currentUser object has a lot of info (including accessToken)
  const [currentUser, setCurrentUser] = useState()
  // const [username, setUserName] = useState(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
    return unsub
  }, [])

  return { currentUser }
}
