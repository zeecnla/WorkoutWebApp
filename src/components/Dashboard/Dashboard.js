import React, {useState, useEffect} from "react"
import WorkOutButton from "../Shared/WorkOutButton"
import Graph from "./Graph"
import Modal from "../Shared/Modal"
import WorkoutList from "./WorkoutList"
import authAxios from "../../services/AuthService"

import { apiURL } from "../../services/AuthService"
import { useAuth } from "../../context/auth-context"
const Dashboard = () => {
  const { user } = useAuth()
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState(null)
  const [workoutList, setWorkoutList] = useState([])
  const [sets, setSets] = useState()
  const [reps, setReps] = useState()
  const [weight, setWeight] = useState()
  const [notes, setNotes] = useState("")
  const [name, setName] = useState("")
  const [category, setCategory] = useState()
  const [modal,setModal]= useState("")

  useEffect(() => {
    authAxios
      .get(`/users/${user?.id}/workouts/all`)
      .then((resp) => {

        return resp
      })
      .then(({ data }) => {
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
      categoryId:category,
      date: currentDate,
      notes: notes,
      userId: user.id,
    }

    authAxios
      .post(`/users/${user.id}/workouts/`, workout)
      .then((resp) => {
        if (resp.status === 200) {
          setWorkoutList((old) => [workout, ...old])
        } else {
          setError("Error in response")
        }
        closeModal()
      })
      .catch((error) => {
        setError(error.toString())
        closeModal()
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
    } else if(name === "category"){
      setCategory(value)
    }
  }

  const closeModal = (e) => setShowModal(false)

  const openModal = (e) => setShowModal(true)


  return (
  <>
   <Modal showModal={showModal}
          handleSubmit={handleSubmit}
          handleChangeFor={handleChangeFor}
          close={closeModal}
          workout= {
            sets,
            reps,
            weight,
            name,
            category,
            notes
          }
          />
  <div className="row content">
    <div className="col-md-12">
      <h1 style={{fontWeight:'bold'}}>Hello, {user?.username}</h1>
    </div>
  </div>
  <div className="row content">
    <div className="col-md-12">
      <Graph/>
    </div>
  </div>

    <div className="row content">
      <div className="col-md-4">
        <WorkOutButton openModal={openModal}/>
      </div>
      <div className="col-md-8">
        {workoutList && <WorkoutList workoutList={workoutList} />}
      </div>
    </div>
  </>
)
  }

export default Dashboard
