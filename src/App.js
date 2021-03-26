import React from "react"
import Application from "./components/Application"
import {AuthProvider} from "./providers/AuthProvider"
function App() {
  return (
    <AuthProvider>
      <Application />
    </AuthProvider>
  )
}

export default App
