import React, { useState, useReducer } from "react"
import { Route, Switch } from "react-router"
import Dashboard from "./Dashboard"

import useUser from "../../context/auth"

import WorkoutForm from "../WorkoutForm"
import { BrowserRouter as Router } from "react-router-dom"
import { Button } from "../styledComponents"
import Navbar from "../Navbar"

import { generateUserWorkout } from "../../firebase"
import { Profile } from "./Profile"

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
        bodypart: "",
      }
    }
    default: {
      throw new Error(`Unhandled Action type ${action.type}`)
    }
  }
}

function Authenticated() {
  const [showModal, setShowModal] = useState(false)
  const [user] = useUser()
  const [stateForm, dispatch] = useReducer(workoutFormReducer, {
    name: "",
    sets: 0,
    reps: 0,
    weight: 0,
    bodypart: "",
  })

  function displayModal() {
    console.log(showModal)
    setShowModal((prevState) => !prevState)
    console.log(showModal)
  }

  function handleChange(event) {
    dispatch({
      type: `SET_FIELD`,
      field: event.target.name,
      payload: event.target.value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    generateUserWorkout(stateForm, user)
    setShowModal(!showModal)
  }
  return (
    <Router>
      <div
        style={{
          display: "flex",
        }}
      >
        <Navbar />
        {showModal ? (
          <div
            style={{
              position: `fixed`,
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: `rgba(0, 0, 0, 0.4)`,
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
              zIndex: 2,
            }}
            onClick={() => {
              // close modal when outside of modal is clicked
              setShowModal(!showModal)
            }}
          >
            <div
              className="modal-content"
              onClick={(e) => {
                // do not close modal if anything inside modal content is clicked
                e.stopPropagation()
              }}
            >
              <WorkoutForm
                state={stateForm}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: `100%`,
            backgroundColor: `#7e95a0`,
          }}
        >
          <Button style={{ alignSelf: "end" }} onClick={displayModal}>
            Add workout
          </Button>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exaxt path="/Profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default Authenticated
