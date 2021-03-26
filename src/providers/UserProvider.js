import React, { useState,useEffect, createContext } from "react"
import { auth, generateUserDocument } from "../firebase"

export const UserContext = createContext({ user: null })

function UserProvider(props) {
  const [user, setUser] = useState({ user: null })
  
  useEffect(() => {
    async function AuthStateChange(){
      auth.onAuthStateChanged(async (userAuth) => {
        const value = await generateUserDocument(userAuth)
        return value
      })
    }
    const {user} = AuthStateChange()
    setUser({user})
  }, [])

  return <UserContext.Provider value={[user,setUser]} {...props} />
}

export default UserProvider
