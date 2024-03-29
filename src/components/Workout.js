import React from "react"

function Workout({ workout }) {
  const { name, sets, weight, reps, date } = workout
  console.log(date)
  const workoutDate = new Date(date * 1000)

  const displayDate =
    workoutDate.getDate() +
    "-" +
    (workoutDate.getMonth() + 1) +
    "-" +
    workoutDate.getFullYear()

  return (
    <div className="grid p-3 bg-blue-300 m-2 rounded">
      <div className="flex justify-between">
        <p className="font-bold">{name}</p>
        <p>{displayDate}</p>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <p>Sets</p>
          <p>{sets}</p>
        </div>
        <div>
          <p>Reps</p>
          <p>{reps}</p>
        </div>
        <div>
          <p>Weight</p>
          <p>{weight}</p>
        </div>
      </div>
    </div>
  )
}

export default Workout
