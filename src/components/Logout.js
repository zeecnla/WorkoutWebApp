import React, { useContext } from "react"
import { auth } from "../firebase"
import { UserContext } from "../providers/UserProvider"

function Logout() {
  const [, setUser] = useContext(UserContext)
  function signout() {
    auth
      .signOut()
      .then((userCredential) => {
        setUser({})
      })
      .catch((error) => {
        console.log("there was an error")
      })
  }

  return <button onClick={signout()}>Logout</button>
}

export default Logout
