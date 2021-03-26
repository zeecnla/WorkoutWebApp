import React, { useContext } from "react"
import Authenticated from "./Authenticated"
import Unauthenticated from "./Unauthenticated"
import { BrowserRouter as Router } from "react-router-dom"
import { UserContext } from "../providers/UserProvider"

function Application() {
  const [{ user }] = useContext(UserContext)

  console.log(user)
  return <Router>{user ? <Authenticated /> : <Unauthenticated />}</Router>
}

export default Application
