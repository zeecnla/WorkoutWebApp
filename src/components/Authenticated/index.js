import React from "react"
import { Route, Switch } from "react-router"
import Dashboard from "./Dashboard"

import { BrowserRouter as Router } from "react-router-dom"
function Authenticated() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}

export default Authenticated
