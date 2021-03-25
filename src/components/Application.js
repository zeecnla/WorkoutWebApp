import React, { useContext, useState, useEffect } from "react"
import Authenticated from "./Authenticated"
import Unauthenticated from "./Unauthenticated"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import FirebaseAuthProvider from "firebase/app"
import firebase from "../firebase"
import Loading from "../components/Loading"
import { UserContext } from "../providers/UserProvider"

function Application() {
  const user = useContext(UserContext)
  useEffect(() => {}, [user])
  return <Router>{user ? <Authenticated /> : <Unauthenticated />}</Router>
}

export default Application
