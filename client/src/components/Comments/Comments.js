import React from 'react'
import {getReadableTime} from '../../utils/formatDate'
import { useSelector, useDispatch } from 'react-redux'
import {deleteComment} from '../../redux/actions/post'
import {
  Comment,
  Header,
  Name,
  Date,
  Content,
  Delete,
} from './Comments.styled'

export const Comments = ({comment: { _id, text, userName, avatar, user, date }, postId}) => {

  const dispatch = useDispatch()
  const userId = useSelector(state => state.auth.user._id)

  const deleteCommentHandler = () => dispatch(deleteComment(postId, _id))

  return (
    <Comment>
      <Header>
        <Name>{userName}</Name>
        <Date>{getReadableTime(date)}</Date>
      </Header>
      <Content>
        {text}
      </Content>
      { user === userId &&
        <Delete>
          <span className="material-icons" onClick={deleteCommentHandler}>
              cancel 
          </span>
        </Delete>
      }
    </Comment>
  )
}
