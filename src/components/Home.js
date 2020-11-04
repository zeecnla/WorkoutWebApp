import React, { useState, useEffect } from "react"

import "jquery"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import "../App.css"

import authAxios from "../services/AuthService"

import { apiURL } from "../services/AuthService"
import Dashboard from "./Dashboard/Dashboard"
import { useAuth } from "../context/auth-context"

function Home() {
  const { user } = useAuth()
  const [error, setError] = useState(null)
  const [workoutList, setWorkoutList] = useState([])
  const [sets, setSets] = useState()
  const [reps, setReps] = useState()
  const [weight, setWeight] = useState()
  const [notes, setNotes] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {
    console.log(authAxios)
    authAxios
      .get(`/users/${user?.id}/workouts/all`)
      .then((resp) => {
        console.log(resp)
        return resp
      })
      .then(({ data }) => {
        console.log(data)
        setWorkoutList(data)
      })
      .catch((error) => {
        setError(error.toString())
      })
  }, [])

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
      userId: user.id,
    }

    authAxios
      .post(`/users/${user.id}/workouts/`, workout)
      .then((resp) => {
        console.log("cesar")
        console.log(resp)
        if (resp.status === 200) {
          setWorkoutList((old) => [workout, ...old])
        } else {
          setError("Error in response")
          console.error("There was an error!", error)
        }
      })
      .catch((error) => {
        setError(error.toString())
        console.error("There was an error!", error)
      })
  }
  const handleChangeFor = (event) => {
    const { name, value } = event.target
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
      <>

      <Dashboard
        handleChangeFor={handleChangeFor}
        handleSubmit={handleSubmit}
        workoutList={workoutList}
      />
      </>
  )
}

export default Home
