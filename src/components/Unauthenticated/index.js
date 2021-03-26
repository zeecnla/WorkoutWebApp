import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Login from "../Login"
import Signup from "../Signup"

function Unauthenticated() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  )
}
export default Unauthenticated
