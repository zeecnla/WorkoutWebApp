import axios from "axios"
import localStorageService from "./LocalStorageService"

const apiURL = "http://localhost:5000/api"

axios.defaults.headers.post["Content-Type"] = "application/json"

const authAxios = axios.create({
  baseURL: apiURL,
  "Access-Control-Allow-Credentials": "*",
})

authAxios.interceptors.request.use(
  (req) => {
    // `req` is the Axios request config, so you can modify
    // the `headers`.
    const token = localStorageService.getAccessToken()
    req.headers.Authorization = `Bearer ${token}`
    console.log(req)
    return req
  },
  (error) => {
    console.log(error)
    Promise.reject(error)
  }
)
authAxios.interceptors.response.use(
  (resp) => {
    console.log("regulsr response")
    console.log(resp)
    return resp
  },
  (error) => {
    console.log("Outside error")
    console.log(error)
    const errorInfo = error
    const originalRequest = error.config
    const errorResp = error.response

    console.log(error)
    console.log(originalRequest)
    console.log(errorResp)
    console.log("inside auth axios error")
    if (
      error.response?.status === 401 &&
      originalRequest?.url === apiURL + "/login/refresh-token"
    ) {
      console.log("returning...")
      return Promise.reject(error)
    }

    if (error.response?.status === 401) {
      console.log("inside if in authaxios")
      return authAxios
        .post(apiURL + "/login/refresh-token", {}, { withCredentials: true })
        .then((res) => {
          console.log("zion")
          console.log(res)
          if (res.status === 200) {
            console.log("updateing token")
            localStorageService.setToken(res.data.jwtToken)
            authAxios.defaults.headers.common["Authorization"] =
              "Bearer " + localStorageService.getAccessToken()
            return authAxios(originalRequest)
          }
        })
        .catch((error) => {
          console.log("refresh token error it")
          console.log(error)
        })
    }
    return Promise.reject(error)
  }
)

export { apiURL, authAxios as default }
