import axios from 'axios'
import {profileConstants} from '../types'

export const getMyProfile = () => async dispatch => {
  try {
    dispatch({type: profileConstants.PROFILE_REQUEST})

    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.token}` 
      }
    }
    const response = await axios.get('/api/profile/me', config)

    dispatch({type: profileConstants.GET_PROFILE, payload: response.data})
  } catch (error) {
    //console.log(error.response) // если нет профиля посмотреть
    dispatch({
      type: profileConstants.PROFILE_ERROR, 
      payload: {
        message: error.response.statusText, 
        status: error.response.status
      }}
    )
  }
}