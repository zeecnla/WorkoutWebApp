import React, { useReducer } from "react"
import { auth, signInWithGoogle, generateUserDocument } from "../firebase"
import { useHistory } from "react-router-dom"

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
        name: "",
        email: "",
        displayName: "",
        password: "",
      }
    }
    default: {
      throw new Error(`Unhandled Action type ${action.type}`)
    }
  }
}

function googleSignIn() {
  signInWithGoogle().catch((error) => {
    console.log(error)
    alert(error)
  })
}

const Signup = () => {
  const history = useHistory()

  const [state, dispatch] = useReducer(loginReducer, {
    name: "",
    email: "",
    displayName: "",
    password: "",
    error: null,
  })

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const { email, displayName, password, name } = state
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      generateUserDocument(user, { displayName, name })
    } catch (error) {
      dispatch({ type: `SET_FIELD`, field: `error`, payload: error })
    }
    dispatch({ type: `CLEAR` })
    history.push("/")
  }
  const handleOnChange = (event) => {
    const { name, value } = event.target
    dispatch({ type: `SET_FIELD`, field: name, payload: value })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleOnChange}
          value={state.name}
        />
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="displayName"
          placeholder="User Name"
          onChange={handleOnChange}
          value={state.displayName}
        />

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
        {state.error !== null ?? <span>There was an error {state.error}</span>}
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => googleSignIn()}>Sign in with Google</button>
    </>
  )
}

export default Signup
