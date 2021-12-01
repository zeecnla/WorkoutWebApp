import React, { useState, useEffect, useReducer } from "react"

import WorkoutList from "../../WorkoutList"
import useUser from "../../../context/auth"
import { getAllUserWorkouts, generateUserWorkout } from "../../../firebase"
import { DashBoardWrapper, Navigation, Title } from "../../styledComponents"

function Dashboard() {
  const [state, setState] = useState([])

  const [user] = useUser()
  useEffect(() => {
    getAllUserWorkouts(user).then((response) => {
      response.forEach((doc) => {
        setState((prevState) => [...prevState, doc.data()])
      })
    })
  }, [user])

  return (
    <DashBoardWrapper>
      <Title inputColor="#fff">Dashboard</Title>
      <WorkoutList workouts={state} />
    </DashBoardWrapper>
  )
}

export default Dashboard
