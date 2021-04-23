import React from "react"

function WorkoutForm({ state, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        placeholder="Name"
        type="text"
        onChange={handleChange}
        value={state.name}
      ></input>

      <label htmlFor="sets">Sets</label>
      <input
        id="sets"
        name="sets"
        type="number"
        onChange={handleChange}
        value={state.sets}
      ></input>

      <label htmlFor="reps">Reps</label>
      <input
        id="reps"
        name="reps"
        type="number"
        onChange={handleChange}
        value={state.reps}
      ></input>

      <label htmlFor="weight">Weight</label>
      <input
        id="weight"
        name="weight"
        type="number"
        onChange={handleChange}
        value={state.weight}
      ></input>
      <button type="submit">Submit</button>
    </form>
  )
}

export default WorkoutForm
