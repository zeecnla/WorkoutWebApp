import React, { useReducer } from "react"
import { auth, signInWithGoogle, generateUserDocument } from "../firebase"
import { useHistory, Link } from "react-router-dom"

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
    <div className="container flex flex-col p-6 justify-center m-auto h-screen">
      <h1 className="text-center">LOGO HERE</h1>
      <form className="grid grid-flow-row gap-2" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleOnChange}
          value={state.name}
          className="p-2 rounded-md  border-b-2 shadow-md focus:outline-none focus:ring-2 focus:border-transparent focus:ring-purple-600"
        />
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="displayName"
          placeholder="User Name"
          onChange={handleOnChange}
          value={state.displayName}
          className="p-2 rounded-md border-b-2 shadow-md focus:outline-none focus:ring-2 focus:border-transparent focus:ring-purple-600"
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
          className="p-2 rounded-md border-b-2 shadow-md focus:outline-none focus:ring-2 focus:border-transparent focus:ring-purple-600"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleOnChange}
          value={state.password}
          className="p-2 rounded-md border-b-2 shadow-md focus:outline-none focus:ring-2 focus:border-transparent focus:ring-purple-600"
        />
        {state.error !== null ?? <span>There was an error {state.error}</span>}
        <button
          className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-purple-500 hover:bg-purple-700 mt-2"
          type="submit"
        >
          Submit
        </button>
      </form>
      <button
        className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700 mt-2"
        onClick={() => googleSignIn()}
      >
        Sign in with Google
      </button>
      <span className="mt-2">
        <p>
          Click{" "}
          <Link to="/" className="border-b-2 hover:underline bg-blue-100">
            here
          </Link>{" "}
          to login instead
        </p>
      </span>
    </div>
  )
}

export default Signup
