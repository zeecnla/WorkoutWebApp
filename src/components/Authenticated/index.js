import React from "react"
import { Route, Switch } from "react-router"
import Dashboard from "./Dashboard"
function Authenticated() {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
    </Switch>
  )
}

export default Authenticated
