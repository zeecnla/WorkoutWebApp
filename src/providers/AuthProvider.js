import React, { useState, useEffect } from "react"
import Loading from "../components/utils/Loading"
import { auth, generateUserDocument } from "../firebase"

const AuthContext = React.createContext()
//TODO: i think we have to set the login and log out function here because they directly impact the state
// i think the setstate causes the rerendering infinite loop
function AuthProvider(props) {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState()
  const value = React.useMemo(() => [user, setUser], [user])

  //check if user is still logged in here
  useEffect(() => {
    function AuthStateChange() {
      auth.onAuthStateChanged(async (userAuth) => {
        const user = await generateUserDocument(userAuth)
        console.log(user)
        setUser(user)
        setIsLoading(false)
        return user
      })
    }
    AuthStateChange()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return <AuthContext.Provider value={value} {...props} />
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
