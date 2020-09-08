import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "jquery"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import "./App.css"
import "./Dashboard"
import Dashboard from "./Dashboard"
import { Login } from "./components/Login"
import { Signup } from "./components/Signup"

const App = () => {
  const [user, setUser] = useState({})
  //user wil have user id to call the api along with the token.

  return (
    <Switch>
      <Route exact path="/" render={(props) => <Login {...props} />} />
      <Route path="/signup" render={(props) => <Signup {...props} />} />
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  )
}

export default App
