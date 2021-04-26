import React, { useReducer } from "react"
import { auth, signInWithGoogle } from "../firebase"
import { Link, useHistory } from "react-router-dom"
import useUser from "../context/auth"
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
        <button
          class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700"
          type="submit"
        >
          Submit
        </button>
      </form>
      <span>
        <Link to="/signup">Click here to sign up instead</Link>
      </span>
      <button
        class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700"
        onClick={() => signInWithGoogle()}
      >
        Sign in with google
      </button>
    </>
  )
}

export default Login
