import React, { useState, useEffect } from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../../context/auth-context"
import { Navbar } from "../Shared/Navbar"
import authAxios from "../../services/AuthService"
import LocalStorageService from "../../services/LocalStorageService"
import { UserContext } from "../../context/user-context"
function PrivateRoute({ component: Component, ...rest }) {
  const { state, setState } = useAuth()
  const jwtToken = LocalStorageService.getAccessToken()
  const [hasToken, setHasToken] = useState(false)
  useEffect(() => {
    checkAuth()
  }, [])
  const checkAuth = () => {
    if (!jwtToken) return
    authAxios
      .post("/login/logged_in")
      .then((resp) => {
        if (resp.status == 200) {
          const { jwtToken } = resp.data
          console.log(resp.data)
          setState({
            loggedInStatus: "LOGGED_IN",
            user: resp.data,
            isLogin: true,
          })
          LocalStorageService.setToken(jwtToken)
          setHasToken(true)
        } else {
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        hasToken ? (
          <UserContext.Provider value={{ state }}>
            <Navbar />
            <Component {...props} />
          </UserContext.Provider>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { referer: props.location.pathname },
            }}
          />
        )
      }
    />
  )
}
export default PrivateRoute
