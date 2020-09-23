import React, { useState } from "react"
import { Link, withRouter } from "react-router-dom"
import axios from "axios"
import { css } from "jquery"

// TODO:
//         1. fix alert for passwordnot match css
//         2. Add contraints to password.
export const Signup = (props) => {
  const [state, setState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    registrationErrors: "",
  })

  const handleChangeFor = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const handleConfirmPassword = (e) => {
    const { password, confirmPassword } = state
    const error = password === confirmPassword ? "" : "Passwords Dont Match"
    setState((prevState) => ({
      ...prevState,
      registrationErrors: error,
    }))
  }
  const handleSubmit = (e) => {
    if (state.registrationErrors) return

    const {
      email,
      username,
      password,
      confirmPassword,
      firstName,
      lastName,
    } = state

    axios
      .post("http://localhost:5000/api/login/signup", {
        FirstName: firstName,
        LastName: lastName,
        UserName: username,
        Email: email,
        Password: password,
      })
      .then((resp) => {
        //ok
        const { data } = resp
        if (resp.status == 200 && data.message === "created") {
          console.log("success")
          props.history.push("/login")
        } else {
          setState((prevState) => ({
            ...prevState,
            registrationErrors: data.message,
          }))
        }
      })
      .catch((error) => {
        console.log(error)
        console.log("registration error", error)
      })
  }

  return (
    <div className="login">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First Name"
            name="firstName"
            onChange={handleChangeFor}
            value={state.firstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            required
            className="form-control"
            id="lastName"
            name="lastName"
            placeholder="last name"
            onChange={handleChangeFor}
            value={state.lastName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="username"
            placeholder="User Name"
            name="username"
            onChange={handleChangeFor}
            value={state.username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChangeFor}
            value={state.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            required
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            required
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="password"
            onChange={handleChangeFor}
            value={state.confirmPassword}
            onBlur={handleConfirmPassword}
          />
        </div>
        {state.registrationErrors ?? (
          <div className="form-group">
            <span className="alert alert-danger">
              <p>{state.registrationErrors}</p>
            </span>
          </div>
        )}
        <div className="form-group">
          <button className="form-control bg-primary text-white">
            Sign up
          </button>
        </div>
        <div className="form-group">
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  )
}
