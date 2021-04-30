import React, { useState, useEffect, useReducer } from "react"

import Logout from "../../Logout"
import WorkoutForm from "../../WorkoutForm"
import WorkoutList from "../../WorkoutList"
import useUser from "../../../context/auth"
import { getAllUserWorkouts, generateUserWorkout } from "../../../firebase"

function workoutFormReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD": {
      return {
        ...state,
        [action.field]: action.payload,
      }
    }
    case "CLEAR": {
      return {
        name: "",
        sets: 0,
        reps: 0,
        weight: 0,
      }
    }
    default: {
      throw new Error(`Unhandled Action type ${action.type}`)
    }
  }
}

function Dashboard() {
  const [state, setState] = useState([])
  const [stateForm, dispatch] = useReducer(workoutFormReducer, {
    name: "",
    sets: 0,
    reps: 0,
    weight: 0,
  })
  const [user] = useUser()
  useEffect(() => {
    getAllUserWorkouts(user).then((response) => {
      response.forEach((doc) => {
        setState((prevState) => [...prevState, doc.data()])
      })
    })
  }, [user])

  function handleChange(event) {
    dispatch({
      type: `SET_FIELD`,
      field: event.target.name,
      payload: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setState((prevState) => [...prevState, stateForm])
    generateUserWorkout(stateForm, user)
  }

  return (
    <div>
      <h1 className="font-black text-center text-2xl">Dashboard</h1>
      <WorkoutForm
        state={stateForm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <WorkoutList workouts={state} />
      <Logout />
    </div>
  )
}

export default Dashboard
