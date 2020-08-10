import {authConstants} from '../types'
//import {errorConstants} from '../types'
//import {messageAlert, setAlert} from './alert'
import {setAlert} from './alert'

//import {store} from '../configurateStore'

export const loginRequest = () => dispatch => {
 
  dispatch({type: authConstants.LOGIN_REQUEST})
}

export const loginSucces = data => dispatch => {
  dispatch({type: authConstants.LOGIN_SUCCESS, payload: data})
}

export const loginFailure = data => dispatch => {
  dispatch({type: authConstants.LOGIN_FAILURE})
  // dispatch({type: errorConstants.ERRORS, payload: data.errors})
  // dispatch({type: errorConstants.MESSAGE, payload: data.message})
  // const message = store.getState().error.message
  // dispatch(messageAlert(message))
  dispatch(setAlert(data.message, 'error'))
}