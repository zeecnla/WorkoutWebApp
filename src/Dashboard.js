import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "jquery"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import "./App.css"
import { Navbar } from "./components/Navbar"
import WorkoutForm from "./components/WorkoutForm"
import WorkoutList from "./components/WorkoutList"

import authAxios from "./components/auth/auth"

function Dashboard(props) {
  const [error, setError] = useState(null)
  const [workoutList, setWorkoutList] = useState([])
  const [sets, setSets] = useState()
  const [reps, setReps] = useState()
  const [weight, setWeight] = useState()
  const [notes, setNotes] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {
    console.log("initial render")

    authAxios
      .get("/user/logged_in")
      .then((resp) => {
        console.log(resp)
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    console.log("i changed")
    console.log(props)
    authAxios
      .get(`/users/${props.user.id}/workouts/`)
      .then((resp) => {
        console.log(resp)
        return resp.json()
      })
      .then((data) => {
        console.log(data)
        setWorkoutList(data)
      })
      .catch((error) => {
        setError(error.toString())
      })
  }, [workoutList.length])

  const handleSubmit = (event) => {
    event.preventDefault()

    const currentDate = new Date()

    const workout = {
      name: name,
      sets: sets,
      reps: reps,
      weight: weight,
      date: currentDate,
      notes: notes,
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
    fetch("http://localhost:5000/api/users/1/workouts/", requestOptions)
      .then((resp) => {
        resp.json()
      })
      .then((result) => {
        console.log("cesar")
        console.log(result)
        if (result) {
        }
      })
      .catch((error) => {
        setError(error.toString())
        console.error("There was an error!", error)
      })

    setWorkoutList((old) => [...old, workout])
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
    } else if (name === "name") {
      setName(value)
    }
  }

  return (
    <div className="container-fluid p-0 main">
      <Navbar />
      <h1>Status: {props.loggedInStatus}</h1>
      <div className="row content">
        <div className="col-md-4">
          <WorkoutForm
            handleSubmit={handleSubmit}
            handleChangeFor={handleChangeFor}
          />
        </div>
        <div className="col-md-8">
          <WorkoutList workoutList={workoutList} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
