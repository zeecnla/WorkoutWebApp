import React from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <aside className="col-12 col-md-2 p-0 bg-dark flex-shrink-1">
    <nav className="navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start py-2">


      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link pl-0 text-nowrap font-weight-bold" >
              Workout Tracker
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/plan`}>
              Plan
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/progress`}>
              Progress
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </aside>
  )
}
