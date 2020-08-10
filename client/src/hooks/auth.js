import {useState, useEffect} from 'react'
import { loginSucces } from '../redux/actions/login'
import { useDispatch } from 'react-redux'
import jwt_decode from "jwt-decode"
import { logout, loadUser } from '../redux/actions/auth'

export const useAuth = () => {

  const [ready, setReady] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    async function auth(){
    
      const token = localStorage.getItem('token')
      
      const currentTime = Date.now() / 1000
      if(token){ 
        const decoded = jwt_decode(token)
        if (decoded.exp < currentTime){
          dispatch(logout())
        }else{
          dispatch(loginSucces(token))
          await dispatch(loadUser())
        }
      }
      setReady(true)
    }
    auth()
    
  }, [dispatch])

  return ready
}