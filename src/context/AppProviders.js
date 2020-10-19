import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { AuthProvider } from "./auth-context"
import { UserProvider } from "./user-context"
function AppProviders({ children }) {
  return (
    <Router>
      <AuthProvider>{children}</AuthProvider>
    </Router>
  )
}
export default AppProviders
