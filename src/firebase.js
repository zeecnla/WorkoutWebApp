import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

// Initialize Firebase
var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSENGER_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
}

export const generateUserWorkout = async (workout, user) => {
  if (!user) return

  const workoutRef = firestore.doc(`workouts/${workout.uid}`)
  const snapshot = await workoutRef.get()

  if (!snapshot.exists) {
    const { name, reps, sets, weight } = workout
    try {
      await workoutRef.set({
        name,
        reps,
        sets,
        weight,
      })
    } catch (error) {
      console.error("Error creating workout document", error)
    }
  }
  return getWorkoutDocument(workout.uid)
}

const getWorkoutDocument = async (uid) => {
  if (!uid) return null
  try {
    const workoutDocument = await firestore.doc(`workouts/${uid}`).get()

    return {
      uid,
      ...workoutDocument.data(),
    }
  } catch (error) {
    console.error("Error fetching workout", error)
  }
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
