import React from "react"
import { ModalForm, Title, Input } from "./styledComponents"
function WorkoutForm({ state, handleChange, handleSubmit }) {
  return (
    <div>
      <ModalForm onSubmit={handleSubmit}>
        <Title inputColor="black"> New Workout</Title>
        <label htmlFor="name">Name</label>
        <Input
          id="name"
          name="name"
          placeholder="Name"
          type="text"
          onChange={handleChange}
          value={state.name}
        ></Input>

        <label htmlFor="sets">Sets</label>
        <Input
          id="sets"
          name="sets"
          type="number"
          onChange={handleChange}
          value={state.sets}
        ></Input>

        <label htmlFor="reps">Reps</label>
        <Input
          id="reps"
          name="reps"
          type="number"
          onChange={handleChange}
          value={state.reps}
        ></Input>

        <label htmlFor="weight">Weight</label>
        <Input
          id="weight"
          name="weight"
          type="number"
          onChange={handleChange}
          value={state.weight}
        ></Input>
        <label htmlFor="bodypart">Muscle Group</label>
        <Input
          id="bodypart"
          name="bodypart"
          type="text"
          onChange={handleChange}
          value={state.bodypart}/>
        <button
          className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700 mt-2"
          type="submit"
        >
          Submit
        </button>
      </ModalForm>
    </div>
  )
}

export default WorkoutForm
