import React from "react"

function Workout({ workout }) {
  const { name, sets, weight, reps, date } = workout
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <h1>{name}</h1>
      <h1>{sets}</h1>
      <h1>{weight}</h1>
      <h1>{reps}</h1>
      <h1>{date}</h1>
    </div>
  )
}

export default Workout
