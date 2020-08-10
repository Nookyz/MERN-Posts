import React from 'react'
import { useEffect } from 'react'
import { getPost } from '../../redux/actions/post'
import { useDispatch, useSelector } from 'react-redux'
import { CommentsForm } from '../Comments/CommentsForm'
import { Post } from './Post'
import { Comments } from '../Comments/Comments'
import { useHistory } from 'react-router'
import { Loader } from '../../global/GlobalStyle'
import {
  Container,
  MyComments,
  Box,
  Button,
  Detail
} from './PostDetail.styled'

export const PostDetail = ({match}) => {

  const dispatch = useDispatch()
  const history = useHistory()
  const goBack = () => history.goBack()
  
  const post = useSelector(state => state.post)

  useEffect(() => {
    dispatch(getPost(match.params.id))
  }, [dispatch, match.params.id])

  

  if(post.loading || post.post === null){
    return <div style={{alignItems: 'center', justifyContent: 'center',marginTop: '100px'}}><Loader/></div>
  }
  
  return (
    <Container>
      <Detail>
        <Box>
          <Button onClick={goBack}>Назад</Button>
        </Box>
        <Post post={post.post}/>
        
        <CommentsForm postId={post.post._id}/>
        <MyComments>
          {post.post.comments.map(comment => (
            <Comments key={comment._id} comment={comment} postId={post.post._id}/>
          ))}
        </MyComments>
      </Detail>
      
    </Container>
  )
}