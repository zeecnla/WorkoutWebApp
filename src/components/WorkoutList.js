import React from "react"
import Workout from "../components/Workout"

function WorkoutList({ workouts }) {
  return (
    <>
      <h3 className="font-black text-center">Workout list</h3>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {workouts ? (
          workouts.map((workout, index) => (
            <Workout key={index} workout={workout} />
          ))
        ) : (
          <h3>no workouts yet :(</h3>
        )}
      </div>
    </>
  )
}

export default WorkoutList
