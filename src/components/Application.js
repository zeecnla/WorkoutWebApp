import React from "react"
import Authenticated from "./Authenticated"
import Unauthenticated from "./Unauthenticated"
import useUser from "../context/auth"

function Application() {
  const [user] = useUser()

  console.log(user)
   //return <h1>hola</h1>
   return user ? <Authenticated /> : <Unauthenticated />
}

export default Application
