import React, { useContext, useReducer } from "react"
import { auth, signInWithGoogle } from "../firebase"
import { Link, useHistory } from "react-router-dom"
import { UserContext } from "../providers/UserProvider"
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
  const [user, setUser] = useContext(UserContext)

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
        console.log(user)

        setUser(userCredential)
        console.log("is this succes")
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
        <button type="submit">Submit</button>
      </form>
      <span>
        <Link to="/signup">Click here to sign up instead</Link>
      </span>
      <button onClick={() => signInWithGoogle()}>Sign in with google</button>
    </>
  )
}

export default Login
