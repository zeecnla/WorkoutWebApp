import React, { useReducer } from "react"
import { auth, signInWithGoogle } from "../firebase"

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
  const [state, dispatch] = useReducer(loginReducer, {
    email: "",
    password: "",
    error: null,
  })

  function handleSubmit(event) {
    event.preventDefault()
    auth
      .signInWithEmailAndPassword(state.email, state.password)
      .then(() => {
        console.log("is this succes")
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
    <>
      <form onSubmit={handleSubmit}>
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
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleOnChange}
          value={state.password}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => signInWithGoogle()}>Sign in with google</button>
    </>
  )
}

export default Login