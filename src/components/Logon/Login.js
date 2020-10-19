import React, { useState, useEffect } from "react"
import "../../App.css"
import { Link, Redirect } from "react-router-dom"
import axios from "axios"
import { useAuth } from "../../context/auth-context"

const Login = () => {
  const { login } = useAuth()
  const [isError, setIsError] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [state, setState] = useState({
    username: "",
    password: "",
  })
  const handleChangeFor = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(state)
  }
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="username"
            name="username"
            onChange={handleChangeFor}
            value={state.username}
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
            onChange={handleChangeFor}
            value={state.password}
          />
        </div>

        <div className="form-group">
          <button className="form-control bg-primary text-white">Login</button>
        </div>
        <div className="form-group">
          <Link to="/signup">Register</Link>
        </div>
        {isError ?? (
          <div className="form-group">
            <span className="alert alert-danger">
              <p>The username or password provided were incorrect!</p>
            </span>
          </div>
        )}
      </form>
    </div>
  )
}

export default Login
