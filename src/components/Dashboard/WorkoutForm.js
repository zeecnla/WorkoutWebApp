import React, { useState, useReducer } from "react"
import { Toast } from "bootstrap"

const WorkoutForm = (props) => {
  //ajax call here
  console.log(props)

  const { name, sets, reps, weight, notes } = props

  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Intense Squat Workout Level 9000"
          name="name"
          onChange={props.handleChangeFor}
          value={name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="sets">Sets</label>
        <input
          type="text"
          className="form-control"
          id="sets"
          placeholder="5"
          name="sets"
          onChange={props.handleChangeFor}
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
          onChange={props.handleChangeFor}
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
          onChange={props.handleChangeFor}
          value={weight}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Notes</label>
        <textarea
          className="form-control"
          id="notes"
          rows="5"
          name="notes"
          onChange={props.handleChangeFor}
          value={notes}
        ></textarea>
      </div>
      <div className="form-group">
        <button className="form-control bg-primary text-white">Submit</button>
      </div>
    </form>
  )
}

export default WorkoutForm
