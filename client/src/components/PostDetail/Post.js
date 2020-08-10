import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { like, unlike, deletePost } from '../../redux/actions/post'
import { getReadableTime } from '../../utils/formatDate'
import { useHistory } from 'react-router'
import { TypeButton } from '../../utils/checkType'
import {
  MyPost,
  Content
} from './Post.styled'
import {
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
} from '../Post/Post.styled'

export const Post = ({post}) => {

  const history = useHistory()
  const dispatch = useDispatch()
  const userId = useSelector(state => state.auth.user._id)

  const addLike = () => dispatch(like(post._id))

  const removeLike = () => dispatch(unlike(post._id))

  const deletePostHandler = () => {
    dispatch(deletePost(post._id))
    history.push('/')
  }
  
  return (
    <MyPost>
      <Title to={`/posts/${post._id}`}>
        {post.title}
      </Title>
      {!post.loading && post.user === userId && (
        <Delete > 
          <span className="material-icons" onClick={deletePostHandler}>
            cancel 
          </span>
        </Delete>
      )}
      <Content>
        {post.text}
      </Content>
      <Date>
        {getReadableTime(post.date)}
      </Date>
      
      <Type >
        <TypeButton type={post.type}/>
      </Type>
      
      
      <Footer>
        <PostFooter>
          <Box>
          {post.likes.find(item => item.user === userId) === undefined ?
            <Like like={false} className="material-icons" onClick={addLike}>
              favorite_border
            </Like>
            :
            <Like like={true} className="material-icons" onClick={removeLike}>
              favorite
            </Like>
          }
            <Count>{post.likes.length}</Count>
          </Box>
          <Box>
            <Comments className="material-icons">
              mode_comment
            </Comments>
            <Count>{post.comments.length}</Count>
          </Box>
          <Box>
            <Watched className="material-icons">
              visibility
            </Watched>
            <Count>{post.watched.length}</Count>
          </Box>
        </PostFooter>
      </Footer>
    </MyPost>
  )
}
