import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {authReducer} from './reducers/auth'
import {alertReducer} from './reducers/alert'
import { profileReducer } from './reducers/profile'
import { postReducer } from './reducers/post'


export const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  profile: profileReducer, // ??
  post: postReducer
})

const middleware = [thunk];

export const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
      compose
  )
)