import React from "react"
import { Route, Switch, useLocation } from "react-router-dom"
import Login from "./components/Logon/Login"
import Signup from "./components/Logon/Signup"

import NotFoundScreen from "./components/Shared/NotFoundScreen"

function AppRoutes(props) {
  const location = useLocation()
  console.log(location)
  console.log("App routes loaded")
  return (
    <Switch>
      <Route exact path="/" render={() => <Login />} />
      <Route exact path="/signup" render={() => <Signup />} />
      <Route path="*" render={() => <NotFoundScreen />} />
    </Switch>
  )
}
function UnAuthenticatedApp(props) {
  console.log(props)
  console.log("i am inside unathenticated side")
  return <AppRoutes />
}

export default UnAuthenticatedApp
