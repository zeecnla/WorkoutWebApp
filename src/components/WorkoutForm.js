import React, { useState, useReducer } from "react"
import { Toast } from "bootstrap"

const WorkoutForm = (props) => {
  const [error, setError] = useState(null)
  const [sets, setSets] = useState()
  const [reps, setReps] = useState()
  const [weight, setWeight] = useState()
  const [notes, setNotes] = useState("")

  //ajax call here
  const handleSubmit = (event) => {
    event.preventDefault()

    const currentDate = new Date()

    const workout = {
      name: "react test",
      sets: sets,
      reps: reps,
      weight: weight,
      date: currentDate,
      userId: 1,
    }
    const requestOptions = {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workout),
    }
    console.log(requestOptions)
    fetch("http://localhost:5000/api/users/1/workouts/", requestOptions)
      .then((resp) => {
        resp.json()
      })
      .then((result) => {
        console.log("sucess")
      })
      .catch((error) => {
        setError(error.toString())
        console.error("There was an error!", error)
      })
    console.log("data ubmitted")
  }
  const handleChangeFor = (event) => {
    console.log(event.target)
    const { name, value } = event.target
    console.log(name)
    if (name === "sets") {
      setSets(value)
    } else if (name === "reps") {
      setReps(value)
    } else if (name === "weight") {
      setWeight(value)
    } else if (name === "notes") {
      setNotes(value)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="sets">Sets</label>
        <input
          type="text"
          className="form-control"
          id="sets"
          placeholder="5"
          name="sets"
          onChange={handleChangeFor}
          value={sets}
        />
      </div>
      <div className="form-group">
        <label htmlFor="reps">Reps</label>
        <input
          type="text"
          className="form-control"
          id="reps"
          placeholder="20"
          name="reps"
          onChange={handleChangeFor}
          value={reps}
        />
      </div>
      <div className="form-group">
        <label htmlFor="weight">Weight</label>
        <input
          type="text"
          className="form-control"
          id="weight"
          placeholder="20"
          name="weight"
          onChange={handleChangeFor}
          value={weight}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Notes</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          name="notes"
          onChange={handleChangeFor}
          value={notes}
        ></textarea>
      </div>
      <div className="form-group">
        <button className="form-control">Submit</button>
      </div>
    </form>
  )
}

export default WorkoutForm
