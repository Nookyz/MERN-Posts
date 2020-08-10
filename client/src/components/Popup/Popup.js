import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/auth'
import { myPosts } from '../../redux/actions/post'
import {
  MyPopup, 
  MyLink, 
  Logout, 
  UserName
} from './Popup.styled'

export const Popup = ({popupRef, setOpenPopup}) => {

  const user = useSelector(state => state.auth.user)

  const dispatch = useDispatch()

  const logoutHandler = () => dispatch(logout())

  const closePopup = () => setOpenPopup(false)

  const myPostsHandler = () => {
    dispatch(myPosts(user._id))
    closePopup()
  }

  return (
    <MyPopup ref={popupRef}>
      <UserName>Здраствуй, {user.userName}!</UserName> 
      <MyLink to='/my-posts' onClick={myPostsHandler}>
        Публикации
      </MyLink>
      <MyLink to='/' onClick={closePopup}>
        Посты
      </MyLink>
      <Logout onClick={() => logoutHandler()}>
        Выйти
      </Logout>
    </MyPopup>
  )
}
