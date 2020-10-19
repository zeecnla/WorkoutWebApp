import React, { createContext, useEffect, useState } from "react"
import LocalStorageService from "../services/LocalStorageService"
import FullPageSpinner from "../components/Utils/FullPageSpinner"
import * as auth from "../providers/auth-provider"

const AuthContext = createContext()
AuthContext.displayName = "AuthContext"

function getAppData() {
  return auth.checkStatus()
}

const AuthProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState()

  useEffect(() => {
    async function fetchData() {
      console.log("Running...")
      const user = await getAppData()
      setUser(user)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const login = async (state) => {
    const user = await auth.login(state)
    setUser(user)
    setIsLoading(false)
  }
  const register = (state) => {
    auth.register(state)
    setIsLoading(false)
  }

  if (isLoading) {
    return <FullPageSpinner />
  }

  return <AuthContext.Provider value={{ login, register, user }} {...props} />
}

function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a Provider`)
  }
  return context
}

function useClient() {
  const { user } = useAuth()
  const token = user?.JwtToken || LocalStorageService.getAccessToken()
  if (token) {
    const userData = getAppData()
    return userData?.user
  }
  return user
}

export { AuthProvider, useAuth, useClient }
