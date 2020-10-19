import React from "react"

import "jquery"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import "./App.css"

import { useAuth } from "./context/auth-context"
import FullPageSpinner from "./components/Utils/FullPageSpinner"

const AuthenticatedApp = React.lazy(() => import("./AuthenticatedApp"))
const UnauthenticatedApp = React.lazy(() => import("./UnAthenticatedApp"))

function App() {
  const { user } = useAuth()
  console.log("hola aigos")
  console.log(user)
  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  )
}

export default App
