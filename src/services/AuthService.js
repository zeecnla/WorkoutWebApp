import axios from "axios"
import localStorageService from "./LocalStorageService"

const apiURL = "http://localhost:5000/api"

axios.defaults.headers.post["Content-Type"] = "application/json"

const authAxios = axios.create({
  baseURL: apiURL,
  withCredentials: true,
})

authAxios.interceptors.request.use(
  (req) => {
    // `req` is the Axios request config, so you can modify
    // the `headers`.
    const token = localStorageService.getAccessToken()
    req.headers.Authorization = `Bearer ${token}`
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
      originalRequest?.url === apiURL + "/refresh-token"
    ) {
      console.log("returning...")
      //   Router.push("/login")
      return Promise.reject(error)
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      console.log("inside if in authaxios")
      originalRequest._retry = true
      const refreshToken = localStorageService.getRefreshToken()
      return authAxios
        .post(apiURL + "/refresh-token", { withCredentials: true })
        .then((res) => {
          console.log("zion")
          console.log(res)
          if (res.status === 201) {
            localStorageService.setToken(res.data.JwtToken)
            authAxios.defaults.headers.common["Authorization"] =
              "Bearer " + localStorageService.getAccessToken()
            return axios(originalRequest)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
    return Promise.reject(error)
  }
)

export { apiURL, authAxios as default }
