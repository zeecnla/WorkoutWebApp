import React from "react"

function WorkoutForm({ state, handleChange, handleSubmit }) {
  return (
    <form
      className="grid shadow bg-white m-2 p-4 rounded-sm"
      onSubmit={handleSubmit}
    >
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
      <button
        className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700 mt-2"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}

export default WorkoutForm
