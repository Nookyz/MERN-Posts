import {profileConstants} from '../types'

const initialState = {
  profile: null,
  profiles: [],
  isLoading: false,
  error: null
}

export const profileReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch(type){
    case profileConstants.PROFILE_REQUEST: 
      return {
        ...state,
        isLoading: true
      }
    case profileConstants.GET_PROFILE: 
      return {
        ...state,
        profile: payload,
        isLoading: false
      }
    case profileConstants.PROFILE_ERROR: 
      return {
        ...state,
        error: payload,
        isLoading: false
      }
    case profileConstants.CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        isLoading: false,
      }
    default:
      return state
  }
}