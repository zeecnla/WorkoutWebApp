import axios from "axios"
import localStorageService from "../../services/LocalStorageService"

const apiURL = "http://localhost:5000/api"

axios.defaults.headers.post["Content-Type"] = "application/json"

const authAxios = axios.create({
  baseURL: apiURL,
})

authAxios.interceptors.request.use(
  (req) => {
    // `req` is the Axios request config, so you can modify
    // the `headers`.
    const token = localStorageService.getAccessToken()
    // req.headers.Authorization = `Bearer ${token}`
    return req
  },
  (error) => {
    console.log(error)
    Promise.reject(error)
  }
)
authAxios.interceptors.response.use(
  (resp) => {
    console.log(resp)
    return resp
  },
  (error) => {
    console.log(error)
    const originalRequest = error.config
    console.log(originalRequest)

    if (
      error.response.status === 401 &&
      originalRequest.url === apiURL + "/refresh-token"
    ) {
      //   Router.push("/login")
      return Promise.reject(error)
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshToken = localStorageService.getRefreshToken()
      return axios.get(apiURL + "/refresh-token").then((res) => {
        if (res.status === 201) {
          localStorageService.setToken(res.data.JwtToken)
          authAxios.defaults.headers.common["Authorization"] =
            "Bearer " + localStorageService.getAccessToken()
          return axios(originalRequest)
        }
      })
    }
    return Promise.reject(error)
  }
)

export { apiURL, authAxios as default }
