import React from "react"
import { auth } from "../firebase"
import useUser from "../context/auth"

function Logout() {
  const [, setUser] = useUser()
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

  return (
    <button
      className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-red-700 mt-2"
      onClick={() => signout()}
    >
      Logout
    </button>
  )
}

export default Logout
