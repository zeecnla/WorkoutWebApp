import React, { Component, createContext } from "react"
import { auth, generateUserDocument } from "../firebase"

export const UserContext = createContext({ user: null })

function UserProvider(props) {
  const [user, setUser] = useState({ user: null })

  useEffect(async () => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth)
      this.setState({ user })
    })
  }, [])

  return <UserContext.Provider value={user} {...props} />
}

export default UserProvider
