import React, { useEffect } from "react"

import useUser from "../context/auth"
import { getAllUserWorkouts } from "../firebase"

function WorkoutList() {
  const [user] = useUser()
  useEffect(() => {
    const workouts = getAllUserWorkouts(user)
    console.log(workouts)
  }, [])

  return <h3>Workout list</h3>
}

export default WorkoutList
