import React from "react"
import { auth } from "../../../firebase"

import Workouts from "../../Workouts"
function Dashboard() {
  function logOut() {
    auth
      .signOut()
      .then((user) => {
        console.log(user)
        console.log("user was logged out")
      })
      .catch((error) => {
        console.log("there was an error")
      })
  }

  return (
    <div>
      <h1>this is the dashboard</h1>
      <Workouts />
      <button onClick={logOut}>Log out</button>
    </div>
  )
}

export default Dashboard
