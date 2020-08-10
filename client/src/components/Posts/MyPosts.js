import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPosts, filterPosts, myPosts} from '../../redux/actions/post'
import {
  Container, 
  Grid, 
  Sidebar, 
  PostContainer,
  SidebarContainer,
  NoPosts,
  Box,
  MyLink
} from './Posts.styled'
import { Post } from '../Post/Post'
import { 
  ReactButton, 
  NodeButton,
  JavaScriptButton,
  VueButton,
  AngularButton,
  HTMLButton,
  CSSButton,
  JavaButton,
  ExpressButton,
  NextButton
} from '../../global/GlobalStyle'
import { useHistory } from 'react-router'

export const MyPosts = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const posts = useSelector(state => state.post.myPosts)
  const userId = useSelector(state => state.auth.user._id)

  useEffect(() => {
    (async function(){
      await dispatch(getPosts())
      dispatch(myPosts(userId))
    })()
  }, [dispatch, userId])

  const liknHandler = type => {
    dispatch(filterPosts(type))
    history.push(`/tag/${type.toLowerCase()}`)
  }

  
  return (
    <Container>
      <Grid>
        <Sidebar>
          <SidebarContainer>
          <ReactButton onClick={() => liknHandler('React')}>
              React
            </ReactButton>
            <NodeButton onClick={() => liknHandler('Node.js')}>
              Node.js
            </NodeButton>
            <JavaScriptButton onClick={() => liknHandler('JavaScript')}>
              JavaScript
            </JavaScriptButton>
            <VueButton onClick={() => liknHandler('Vue.js')}>
              Vue.js
            </VueButton>
            <CSSButton onClick={() => liknHandler('CSS')}>
              CSS
            </CSSButton>
            <AngularButton onClick={() => liknHandler('Angular')}>
              Angular
            </AngularButton>
            <HTMLButton onClick={() => liknHandler('HTML')}>
              HTML
            </HTMLButton>
            <JavaButton onClick={() => liknHandler('Java')}>
              Java
            </JavaButton>
            <ExpressButton onClick={() => liknHandler('Express')}>
              Express
            </ExpressButton>
            <NextButton onClick={() => liknHandler('Next.js')}>
              Next.js
            </NextButton>
          </SidebarContainer>
          
        </Sidebar>
        <PostContainer>
          {!posts.length ? 
          <React.Fragment>
            <NoPosts>Ваших постов нету, создайте свой пост</NoPosts>
            <Box>
              <MyLink to='/create-post'>Создать пост</MyLink>
            </Box> 
          </React.Fragment>
          :
            posts.map(post => (
            <Post
              key={post._id}
              title={post.title} 
              date={post.date} 
              type={post.type} 
              likes={post.likes} 
              comments={post.comments.length} 
              watched={post.watched.length} 
              id={post._id}
              user={post.user}
            />
          ))}
        </PostContainer>
        
      </Grid>
    </Container>
  )
}