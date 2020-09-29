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
import localStorageService from "./services/LocalStorageService"

const App = () => {
  const [state, setState] = useState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {},
  })
  //user wil have user id to call the api along with the token.
  const handleLogin = (data) => {
    const { jwtToken } = data
    console.log(data)

    console.log("handle login")
    setState({
      loggedInStatus: "LOGGED_IN",
      user: data,
    })
    console.log(jwtToken)
    console.log(data)
    localStorageService.setToken(jwtToken)
    //set token here
  }
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => (
          <Dashboard
            {...props}
            loggedInStatus={state.loggedInStatus}
            user={state.user}
          />
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
