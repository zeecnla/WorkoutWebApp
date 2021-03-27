import React, { useReducer } from "react";

function workoutFormReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD": {
      return {
        ...state,
        [action.field]: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled Action type ${action.type}`);
    }
  }
}

function WorkoutForm() {
  const [state, dispatch] = useReducer(workoutFormReducer, {
    name: "",
    sets: 0,
    reps: 0,
    weight: 0,
  });
  function handleSubmit(event) {
    event.preventDefault();
  }
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: `SET_FIELD`, field: name, payload: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        placeholder="Name"
        type="text"
        onChange={(e) =>
          dispatch({
            type: `SET_FIELD`,
            field: e.target.name,
            payload: e.target.value,
          })
        }
        value={state.name}
      ></input>

      <label htmlFor="sets">Sets</label>
      <input
        id="sets"
        name="sets"
        type="number"
        onChange={(e) =>
          dispatch({
            type: `SET_FIELD`,
            field: e.target.name,
            payload: e.target.value,
          })
        }
        value={state.sets}
      ></input>

      <label htmlFor="reps">Reps</label>
      <input
        id="reps"
        name="reps"
        type="number"
        onChange={(e) =>
          dispatch({
            type: `SET_FIELD`,
            field: e.target.name,
            payload: e.target.value,
          })
        }
        value={state.reps}
      ></input>

      <label htmlFor="weight">Weight</label>
      <input
        id="weight"
        name="weight"
        type="number"
        onChange={(e) =>
          dispatch({
            type: `SET_FIELD`,
            field: e.target.name,
            payload: e.target.value,
          })
        }
        value={state.weight}
      ></input>
    </form>
  );
}

export default WorkoutForm;
