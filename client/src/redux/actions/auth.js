import axios from 'axios'
import {authConstants, usersConstants} from '../types'
import {
  registerRequest,
  registerSucces,
  registerFailure
} from './register'
import {
  loginRequest,
  loginSucces,
  loginFailure
} from './login'

export const loadUser = () => async dispatch => {
  try {
    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.token}` 
      }
    }
    const response = await axios.get('/api/users', config)

    dispatch({type: usersConstants.USER_LOADED, payload: response.data})
    // console.log('AUTH SUCCESS')
  } catch (error) {
    // console.log('AUTH ERROR')
  }
}

export const register = body => async dispatch => {
  try {
    dispatch(registerRequest())
    const response = await axios.post(
      `/api/auth/register`,
      {...body},
    )
    const data = await response.data
    
    dispatch(registerSucces(data.message))
    
  } catch (error) {
    const data = await error.response.data
    dispatch(registerFailure(data))
  }
}

export const login = body => async dispatch => {
  try {
    dispatch(loginRequest())
    const response = await axios.post(
      `/api/auth/login`,
      {...body},
    )
    const data = await response.data

    localStorage.setItem('token', data.token)

    dispatch(loginSucces(data.token))
    dispatch(loadUser())
  } catch (error) {
    const data = await error.response.data
    dispatch(loginFailure(data))
  }
}

export const logout = () => dispatch => {
  localStorage.removeItem('token')
  // dispatch({type: profileConstants.CLEAR_PROFILE})
  dispatch({type: authConstants.LOGOUT})
}