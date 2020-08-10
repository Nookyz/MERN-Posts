import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useClose } from '../../hooks/close'
import { Popup } from '../Popup/Popup'
import { Container } from '../../global/GlobalStyle'
import {
  Nav,
  Logo, 
  NavLinks, 
  Link, 
  Avatar,
  Box
} from './Navbar.styled'

export const Navbar = () => {

  const [openPopup, setOpenPopup] = useState(false)
  const popupRef = useRef(null)

  useClose(popupRef, () => setOpenPopup(false))

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const avatar = useSelector(state => state.auth.user?.avatar)
  
  if(isAuthenticated){
    return (
      <React.Fragment>
        <Nav>
          <Container>
            <Link to='/' exact >  
              <span className="material-icons">
                home
              </span>    
            </Link>
            <NavLinks>
              
              <Link to='/create-post'> 
                <span className="material-icons">
                  create
                </span> 
              </Link>
              
              <Box>
                <Avatar src={avatar} alt='avatar' onClick={() => setOpenPopup(!openPopup)} />
                {openPopup  && <Popup popupRef={popupRef} setOpenPopup={setOpenPopup}/>}
              </Box>
            </NavLinks>
          </Container>
        </Nav>
      </React.Fragment>
    )
  }
  return (
    <Nav>
      <Container>
        <Logo>Авторизация</Logo>
        <NavLinks>
          <Link to='/' exact >
            Login
          </Link>
          <Link to='/signup' >
            Register
          </Link>
        </NavLinks>
      </Container>
    </Nav>
  )
}
