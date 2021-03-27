import React, { Suspense } from "react"
import Application from "./components/Application"
import Loading from "./components/utils/Loading"
import {AuthProvider} from "./providers/AuthProvider"
function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<Loading/>}>
        <Application />
      </Suspense>
    </AuthProvider>
  )
}

export default App
