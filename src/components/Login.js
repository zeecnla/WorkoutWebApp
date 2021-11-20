import React, { useReducer } from "react"
import { auth, signInWithGoogle } from "../firebase"
import { Link, useHistory } from "react-router-dom"
import useUser from "../context/auth"
import { Wrapper, Title, Button, GoogleButton, Input } from "./styledComponents"
//TODO: Instead of use state. try using use reducer since we have multiple values in our object
function loginReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD": {
      return {
        ...state,
        [action.field]: action.payload,
      }
    }
    case "CLEAR": {
      return {
        ...state,
        email: "",
        password: "",
      }
    }

    default: {
      throw new Error(`Unhandled Action type ${action.type}`)
    }
  }
}
const Login = () => {
  const history = useHistory()
  const [, setUser] = useUser()

  const [state, dispatch] = useReducer(loginReducer, {
    email: "",
    password: "",
    error: null,
  })

  function handleSubmit(event) {
    event.preventDefault()
    auth
      .signInWithEmailAndPassword(state.email, state.password)
      .then((userCredential) => {
        const user = userCredential.user

        setUser({ user })
        console.log("is this succes")
        debugger
        history.push("/")
      })
      .catch((error) => {
        dispatch({
          type: `SET_FIELD`,
          field: error,
          payload: `Error signing in with password and email!`,
        })
        console.error("Error signing in with password and email", error)
      })
  }
  const handleOnChange = (event) => {
    const { name, value } = event.target
    dispatch({ type: `SET_FIELD`, field: name, payload: value })
  }

  return (
    <Wrapper>
      <Title>Login</Title>
      <form className="grid grid-flow-row gap-2" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) =>
            dispatch({
              type: `SET_FIELD`,
              field: e.target.name,
              payload: e.target.value,
            })
          }
          value={state.email}
          className="p-2 rounded-md  border-b-2 shadow-md focus:outline-none focus:ring-2 focus:border-transparent focus:ring-purple-600"
        />
        <label htmlFor="password">Password</label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleOnChange}
          value={state.password}
          className="p-2 rounded-md  border-b-2 shadow-md focus:outline-none focus:ring-2 focus:border-transparent focus:ring-purple-600"
        />
        <Button primary type="submit">
          Submit
        </Button>
      </form>
      <GoogleButton onClick={() => signInWithGoogle()}>
        Sign in with google
      </GoogleButton>
      <span className="mt-2">
        <p>
          Click{" "}
          <Link to="/signup" className="border-b-2 hover:underline bg-blue-100">
            here
          </Link>{" "}
          to sign up instead
        </p>
      </span>
    </Wrapper>
  )
}

export default Login
