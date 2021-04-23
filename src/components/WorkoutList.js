import React, { useEffect, useState } from "react"
import Workout from "../components/Workout"

function WorkoutList({ workouts }) {
  console.log(workouts)

  return (
    <>
      <h3>Workout list</h3>
      <h1>test</h1>
      {workouts ? (
        workouts.map((workout, index) => (
          <Workout key={index} workout={workout} />
        ))
      ) : (
        <h3>no workouts yet :(</h3>
      )}
    </>
  )
}

export default WorkoutList
