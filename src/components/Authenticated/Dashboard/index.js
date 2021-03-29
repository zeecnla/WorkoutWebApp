import React from "react"
import { auth } from "../../../firebase"
import Logout from "../../Logout"
import WorkoutForm from "../../WorkoutForm"
import WorkoutList from "../../WorkoutList"

function Dashboard() {
  return (
    <div>
      <h1>this is the dashboard</h1>
      <WorkoutForm />
      <WorkoutList />
      <Logout />
    </div>
  )
}

export default Dashboard
