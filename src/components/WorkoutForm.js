import React from "react"

function workoutFormReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD": {
        return {
            ...state,
            [action.name]:
        }
    }
    default: {
      throw new Error(`Unhandled Action type ${action.type}`)
    }
  }
}

function WorkoutForm() {
  const [state, dispatch] = useDispatch(workoutFormReducer, {
    name: "",
    sets: 0,
    reps: 0,
    weight: 0,
  })

  return <form></form>
}
