import useJwt from '@src/auth/jwt/useJwt'
import { logout } from '../../../firebase'
import axios from 'axios'

const config = useJwt.jwtConfig

// ** Handle User Login
// export const handleLogin = (data) => {
//   return (dispatch) => {
//     dispatch({
//       type: 'LOGIN',
//       data: data.user,
//       config,
//       [config.storageTokenKeyName]: data[config.storageTokenKeyName],
//       [config.storageRefreshTokenKeyName]: data[config.storageRefreshTokenKeyName]
//     })

//     // ** Add to user, accessToken & refreshToken to localStorage
//     localStorage.setItem('userData', JSON.stringify(data.user))
//     localStorage.setItem(config.storageTokenKeyName, data.accessToken)
//     localStorage.setItem(config.storageRefreshTokenKeyName, data.refreshToken)
//   }
// }

// ** Handle User Logout
export const handleLogout = () => {
  return (dispatch) => {
    dispatch({ type: 'LOGOUT', [config.storageTokenKeyName]: null, [config.storageRefreshTokenKeyName]: null })

    // ** Remove user, accessToken & refreshToken from localStorage
    localStorage.removeItem('userData')
    localStorage.removeItem(config.storageTokenKeyName)
    localStorage.removeItem(config.storageRefreshTokenKeyName)

    // Firebase logout
    logout()
  }
}

// ** Get User Data
export const getUserData = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/v1/users/me`)
      dispatch({ type: 'GET_USER_DATA', payload: res.data })
    } catch (error) {
      console.error(error)
    }
  }
}
