import React from 'react'
import { like, unlike, deletePost } from '../../redux/actions/post'
import { useDispatch, useSelector } from 'react-redux'
import { getReadableTime } from '../../utils/formatDate'
import { TypeButton } from '../../utils/checkType'
import {
  MyPost, 
  Title, 
  Date, 
  Footer, 
  Type, 
  Box, 
  PostFooter, 
  Like,
  Comments,
  Watched,
  Count,
  Delete
} from './Post.styled'

export const Post = (props) => {
  const {title, date, type, likes, comments, watched, id, user} = props

  const dispatch = useDispatch()

  const userId = useSelector(state => state.auth.user._id)

  const addLike = () => dispatch(like(id))

  const removeLike = () => dispatch(unlike(id))

  const deletePostHandler = () => dispatch(deletePost(id))

  return (
    <MyPost>
      <Title to={`/posts/${id}`}>
        {title}
      </Title>
      { user === userId && (
        <Delete > 
          <span className="material-icons" onClick={deletePostHandler}>
            cancel 
          </span>
        </Delete>
      )}
      <Date>
        {getReadableTime(date)}
      </Date>      
      <Type>
        <TypeButton type={type}/>
      </Type>
      
      <Footer>
        <PostFooter>
          <Box>
          {likes.find(item => item.user === userId) === undefined ?
            <Like like={false} className="material-icons" onClick={addLike}>
              favorite_border
            </Like>
            :
            <Like like={true} className="material-icons" onClick={removeLike}>
              favorite
            </Like>
          }
            <Count>{likes.length}</Count>
          </Box>
          <Box>
            <Comments className="material-icons">
              mode_comment
            </Comments>
            <Count>{comments}</Count>
          </Box>
          <Box>
            <Watched className="material-icons">
              visibility
            </Watched>
            <Count>{watched}</Count>
          </Box>
        </PostFooter>
      </Footer>
    </MyPost>
  )
}

