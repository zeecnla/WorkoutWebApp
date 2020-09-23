import React, { useState, useEffect } from "react"
import "../App.css"
import { Link } from "react-router-dom"
import axios from "axios"

export const Login = (props) => {
  const [state, setState] = useState({
    username: "",
    password: "",
    loginErrors: "",
  })

  const handleChangeFor = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, password, loginErrors } = state

    axios
      .post(
        "http://localhost:5000/api/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((resp) => {
        //ok
        console.log(resp)
        if (resp.status == 200) {
          const { data } = resp

          props.handleLogin(data)
          props.history.push("/")
        }
      })
      .catch((error) => {
        const { message } = error.response.data
        setState((prevState) => ({
          ...prevState,
          loginErrors: message,
        }))
      })
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
        {state.loginErrors ?? (
          <div className="form-group">
            <span className="alert alert-danger">
              <p>{state.loginErrors}</p>
            </span>
          </div>
        )}
        <div className="form-group">
          <button className="form-control bg-primary text-white">Login</button>
        </div>
        <div className="form-group">
          <Link to="/signup">Register</Link>
        </div>
      </form>
    </div>
  )
}
