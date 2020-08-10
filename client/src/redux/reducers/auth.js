import {authConstants, usersConstants} from '../types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  user: null
}

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch(type){
    case usersConstants.USER_LOADED: 
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        isLoading: false
      }
    case authConstants.REGISTER_REQUEST: 
      return {
        ...state,
        isLoading: true
      }
    case authConstants.REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      }
    case authConstants.REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    case authConstants.LOGIN_REQUEST: 
      return {
        ...state,
        isLoading: true
      }
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload,
      }
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false
      }
    case authConstants.LOGOUT:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        token: null,
        user: null
      }
    default :
      return state
  }
}