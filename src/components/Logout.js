import React from "react"
import { auth } from "../firebase"
import useUser from "../context/auth"
import { LogoutButton } from "./styledComponents"

function Logout() {
  const [, setUser] = useUser()
  function signout() {
    auth
      .signOut()
      .then(() => {
        setUser(null)
      })
      .catch((error) => {
        console.log("there was an error")
      })
  }

  return <LogoutButton onClick={() => signout()}>Logout</LogoutButton>
}

export default Logout
