import * as actioTypes from "./actionTypes"
import axios from "axios"

export const authStart = () => {
  return {
    type: actioTypes.AUTH_START,
  }
}

export const authSuccess = (token, userId) => {
  return {
    type: actioTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  }
}

export const authFail = (error) => {
  return {
    type: actioTypes.AUTH_FAIL,
    error,
  }
}

export const logout = () => {
  return {
    type: actioTypes.AUTH_LOGOUT,
  }
}

export const checkAuthTimeOut = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout())
    }, expirationTime * 1000)
  }
}

export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart())
    const authData = {
      email,
      password,
      returnSecureToken: true,
    }
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBtZRmo7OZoaKgKB7xhICmBrNo6aeNy0p0"
    if (!isSignup) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBtZRmo7OZoaKgKB7xhICmBrNo6aeNy0p0"
    }
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response)
        dispatch(authSuccess(response.data.idToken, response.data.localId))
        dispatch(checkAuthTimeOut(response.data.expiresIn))
      })
      .catch((error) => {
        dispatch(authFail(error.response.data.error))
      })
  }
}

export const setAuthRedirectPath = (path) => {
  return {
    type: actioTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  }
}
