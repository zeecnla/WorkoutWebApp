import React from "react"
import "../App.css"
import { Link } from "react-router-dom"

export const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Name</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="email@email.com"
            name="email"
            //   onChange={props.handleChangeFor}
            //   value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="password"
            //   onChange={props.handleChangeFor}
            //   value={password}
          />
        </div>
        <div className="form-group">
          <button className="form-control">Submit</button>
        </div>
        <div className="form-group">
          <Link to="/Signup">Register</Link>
        </div>
      </form>
    </div>
  )
}
