import LocalStorageService from "../services/LocalStorageService"
import axios from "axios"
import authAxios from "../services/AuthService"
import { apiURL } from "../services/AuthService"

const handleUserResponse = (data) => {
  LocalStorageService.setToken(data.jwtToken)
  return data
}

const checkStatus = async () => {
  if (!LocalStorageService.getAccessToken()) {
    return null
  }
  return await client("/status", {}, true)
}

const login = async ({ username, password }) => {
  const result = await client("/", {
    username,
    password,
  })
  return handleUserResponse(result)
}
const register = async ({ firstName, lastName, username, email, password }) => {
  const result = await client("/signup", {
    firstName,
    lastName,
    username,
    email,
    password,
  })
  return result
}
const logout = () => {}

async function client(endpoint, data, withAuth = false) {
  const path = `${apiURL}/login${endpoint}`
  let resp = null
  if (withAuth) {
    await authAxios
      .post(path, data, {
        withCredentials: withAuth,
      })
      .then((data) => {
        resp = data
      })
  } else {
    await axios
      .post(path, data, {
        withCredentials: true,
      })
      .then((data) => {
        resp = data
      })
  }
  if (resp?.status == 200) {
    return resp.data
  } else {
    return Promise.reject(data)
  }
}

export { login, register, checkStatus }
