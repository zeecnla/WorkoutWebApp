import React from "react"
import "jquery"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import "./App.css"
import { Navbar } from "./components/Navbar"
import WorkoutForm from "./components/WorkoutForm"
import WorkoutList from "./components/WorkoutList"

function App() {
  return (
    <div className="container-fluid p-0 main">
      <Navbar />
      <div className="row no-gutters">
        <div className="col-md-auto">
          <WorkoutForm />
          <WorkoutList />
        </div>
      </div>
    </div>
  )
}

export default App
