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
  const [state, setState] = useState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {},
  })
  //user wil have user id to call the api along with the token.
  const handleLogin = (data) => {
    console.log(data)
    setState((prevState) => ({
      ...prevState,
      loggedInStatus: "LOGGED_IN",
      user: data,
    }))
  }
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => (
          <Dashboard {...props} loggedInStatus={state.loggedInStatus} />
        )}
      />
      <Route
        exact
        path="/login"
        render={(props) => <Login {...props} handleLogin={handleLogin} />}
      />
      <Route exact path="/signup" render={(props) => <Signup {...props} />} />
    </Switch>
  )
}

export default App
