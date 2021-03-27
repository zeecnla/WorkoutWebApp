import React from "react"
import useUser from "../context/auth"

const Authenticated = React.lazy(()=> import('./Authenticated'))
const Unauthenticated = React.lazy(()=>import('./Unauthenticated'))

function Application() {
  const [user] = useUser()

  console.log(user)
   //return <h1>hola</h1>
   return user ? <Authenticated /> : <Unauthenticated />
}

export default Application
