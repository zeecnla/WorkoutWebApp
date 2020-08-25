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
  //ajax call here
  console.log(props)
  return (
    <div className="list-group">
      {props.workoutList.map(({ name, sets, reps, date, workoutId }, key) => (
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
