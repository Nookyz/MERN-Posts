import {authConstants} from '../types'
import {setAlert} from './alert'

export const registerRequest = () => dispatch => {
  dispatch({type: authConstants.REGISTER_REQUEST})
}

export const registerSucces = message => dispatch => {
  dispatch({type: authConstants.REGISTER_SUCCESS})
  dispatch(setAlert(message, 'success'))
}

export const registerFailure = data => dispatch => {
  dispatch({type: authConstants.REGISTER_FAILURE})
  console.log(data.errors)
  if(data.errors){
    data.errors.forEach(error => dispatch(setAlert(error.msg, 'error')))
  }
  dispatch(setAlert(data.message, 'error'))
}