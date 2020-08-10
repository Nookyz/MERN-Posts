import React from 'react'
import { GlobalStyle, Loader } from '../../global/GlobalStyle'
import { useRoutes } from '../../routes'
import { Navbar } from '../Navbar/Navbar'
import { useSelector } from 'react-redux'
import { useAuth } from '../../hooks/auth'
import Alert from '../Alert/Alert'
import {
  MyApp, 
  Body
} from './App.styled'

const App = () => {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const routes = useRoutes(isAuthenticated)
  
  const ready = useAuth()
  
  if(!ready){
    return (
      <div style={{alignItems: 'center', justifyContent: 'center'}}><Loader/></div>
    )
  }

  return (
    <React.Fragment>
      <GlobalStyle/>
      <Alert/>
      <MyApp>
        <Navbar/> 
        <Body>
          {routes}
        </Body>
      </MyApp>
    </React.Fragment>
  )
}

export default App
