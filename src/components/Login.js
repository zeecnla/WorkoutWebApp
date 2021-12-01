import React, { useReducer } from "react"
import { auth, signInWithGoogle } from "../firebase"
import { Link, useHistory } from "react-router-dom"
import useUser from "../context/auth"
import {
  Wrapper,
  Title,
  Button,
  GoogleButton,
  Input,
  Form,
  FullScreen,
  ErrorMessage,
} from "./styledComponents"
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
    errorMessage: null,
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
        let errorMessage

        if (error.code === "auth/user-not-found") {
          errorMessage = "User not found"
        } else if (error.code === "auth/wrong-password") {
          errorMessage = "Invalid email/password"
        } else if (error.code === "auth/too-many-requests") {
          //redirect to reset password
        }
        dispatch({
          type: `SET_FIELD`,
          field: `errorMessage`,
          payload: errorMessage,
        })
        console.error("Error signing in with password and email", error)
      })
  }
  const handleOnChange = (event) => {
    const { name, value } = event.target
    dispatch({ type: `SET_FIELD`, field: name, payload: value })
  }

  return (
    <FullScreen>
      <Wrapper>
        <Title inputColor="#fff">Login</Title>
        {state.errorMessage ?? (
          <ErrorMessage>{state.errorMessage}</ErrorMessage>
        )}
        <Form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <Input
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
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleOnChange}
            value={state.password}
          />
          <Button primary type="submit">
            Submit
          </Button>
        </Form>
        <GoogleButton onClick={() => signInWithGoogle()}>
          Sign in with google
        </GoogleButton>
        <span className="mt-2">
          <p>
            Click{" "}
            <Link
              to="/signup"
              className="border-b-2 hover:underline bg-blue-100"
            >
              here
            </Link>{" "}
            to sign up instead
          </p>
        </span>
      </Wrapper>
    </FullScreen>
  )
}

export default Login
