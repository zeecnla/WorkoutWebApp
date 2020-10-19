// LocalStorageService.js
const localStorageService = (function () {
  var _service
  function _getService() {
    if (!_service) {
      _service = this
      return _service
    }
    return _service
  }
  function _setToken(token) {
    console.log("My token is here")
    console.log(token)
    localStorage.setItem(`access_token`, token)
  }

  function _setUserId(id) {
    localStorage.setItem(`user_id`, id)
  }
  function _getUserId() {
    return localStorage.getItem(`user_id`)
  }
  function _getAccessToken() {
    return localStorage.getItem(`access_token`)
  }
  function _clearToken() {
    localStorage.removeItem(`access_token`)
  }
  return {
    getService: _getService,
    setToken: _setToken,
    getAccessToken: _getAccessToken,
    clearToken: _clearToken,
    setUserId: _setUserId,
    getUserId: _getUserId,
  }
})()
export { localStorageService as default }
