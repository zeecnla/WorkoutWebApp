import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA9GMpRDYqDY2PWPy9jec6tAkN3er-h9BY",
  authDomain: "workouttracker-469d0.firebaseapp.com",
  projectId: "workouttracker-469d0",
  storageBucket: "workouttracker-469d0.appspot.com",
  messagingSenderId: "611737700535",
  appId: "1:611737700535:web:eb0c94bde64c2de59d2532",
  measurementId: "G-EQFH96WFLE",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
}

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return
  const userRef = firestore.doc(`users/${user.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { email, displayName } = user
    try {
      await userRef.set({
        displayName,
        email,
        ...additionalData,
      })
    } catch (error) {
      console.error("Error creating user document", error)
    }
  }
  return getUserDocument(user.uid)
}

const getUserDocument = async (uid) => {
  if (!uid) return null
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get()

    return {
      uid,
      ...userDocument.data(),
    }
  } catch (error) {
    console.error("Error fetching user", error)
  }
}
