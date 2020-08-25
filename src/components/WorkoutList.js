import React, { useState, useEffect } from "react"
import { Toast } from "bootstrap"

function formatDate(date) {
  if (date === null) return
  var options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(
    new Date(date).getFullYear(),
    new Date(date).getMonth(),
    new Date(date).getDate()
  ).toDateString()
}

const WorkoutList = (props) => {
  const [error, setError] = useState(null)
  const [workoutList, setWorkoutList] = useState([])

  useEffect(() => {
    const requestOptions = {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
    fetch("http://localhost:5000/api/users/1/workouts/", requestOptions)
      .then((resp) => {
        console.log(resp)
        return resp.json()
      })
      .then((data) => {
        console.log(data)
        console.log("sucess")
        setWorkoutList(data)
      })
      .catch((error) => {
        setError(error.toString())
        console.error("There was an error!", error)
      })
  }, [])
  //ajax call here

  return (
    <div className="list-group">
      {workoutList.map(({ name, sets, reps, date, workoutId }, key) => (
        <a
          href="#"
          className="list-group-item list-group-item-action flex-column align-items-start"
          key={workoutId}
          style={{ paddingTop: "10px" }}
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{name}</h5>
            <small>{formatDate(date)}</small>
          </div>
          <p className="mb-1">
            Sets :{sets} Reps:{reps}
          </p>
        </a>
      ))}
    </div>
  )
}

export default WorkoutList
