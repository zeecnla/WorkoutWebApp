import React from "react"
import { Route, Router, Switch } from "react-router-dom"
import Login from "../Login"
import Signup from "../Signup"

function Unauthenticated() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
    </Switch>
  )
}
export default Unauthenticated
