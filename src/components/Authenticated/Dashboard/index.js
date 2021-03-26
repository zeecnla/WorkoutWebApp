import React from "react"
import { auth } from "../../../firebase"
import Logout from "../../Logout"
import Workouts from "../../Workouts"
function Dashboard() {
  return (
    <div>
      <h1>this is the dashboard</h1>
      <Workouts />
      <Logout />
    </div>
  )
}

export default Dashboard
