import React from "react"
import { auth } from "../firebase"
import useUser from "../context/auth"

function Logout() {
   const [,setUser] = useUser()
  function signout() {
    auth
      .signOut()
      .then((userCredential) => {
        setUser(null)
      })
      .catch((error) => {
        console.log("there was an error")
      })
  }

  return <button onClick={()=> signout()}>Logout</button>
}

export default Logout
