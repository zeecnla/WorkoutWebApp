import React, { useState } from "react"
import { Link, withRouter } from "react-router-dom"

export const Signup = (props) => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [error, setError] = useState({
    notMatch: false,
  })
  const handleChangeFor = (event) => {
    const { name, value } = event.target
    if (name === "firstName") {
      setFirstName(value)
    } else if (name === "lastName") {
      setLastName(value)
    } else if (name === "email") {
      setEmail(value)
    } else if (name === "password") {
      setPassword(value)
    } else if (name === "confirmPassword") {
      setConfirmPassword(value)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      console.log("password dont match")
      setError((prev) => ({
        ...prev,
        noMatch: true,
      }))
      return
    }
    setError((prev) => ({
      ...prev,
      noMatch: false,
    }))

    const requestOptions = {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    }
    // fetch("http://localhost:5000/api/login/signup", requestOptions)
    //   .then((resp) => {
    //     //ok
    //     if (resp.status == 200) {
    //       console.log("success")
    //       return resp.json()
    //     }
    //   })
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    props.history.push("/")
  }
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
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
            value={firstName}
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
            value={lastName}
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
            value={email}
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
            value={password}
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
            value={confirmPassword}
          />
        </div>
        <div className="form-group">
          {error.match ?? (
            <span className="alert-danger">Passwords don't match</span>
          )}
          <button className="form-control bg-primary text-white">Submit</button>
        </div>
        <div className="form-group">
          <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  )
}
