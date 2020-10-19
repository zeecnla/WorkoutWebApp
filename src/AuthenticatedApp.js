import React from "react"
import { Route, Switch } from "react-router-dom"
import Progress from "./components/Progress/Progress"
import Plan from "./components/Plan/Plan"
import { Navbar } from "./components/Shared/Navbar"
import Home from "./components/Home"
import { useAuth } from "./context/auth-context"

import NotFoundScreen from "./components/Shared/NotFoundScreen"
import Login from "./components/Logon/Login"

function AppRoutes({ user }) {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/plan" render={() => <Plan />} />
      <Route path="/progress" render={() => <Progress />} />
      <Route path="*" render={() => (user ? <NotFoundScreen /> : <Login />)} />
    </Switch>
  )
}
function AuthenticatedApp() {
  const { user } = useAuth()
  return (
    <div className="container">
      <Navbar />
      <AppRoutes user={user} />
    </div>
  )
}

export default AuthenticatedApp
