import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPosts, filterPosts} from '../../redux/actions/post'
import { useEffect } from 'react'
import {
  Container, 
  Grid, 
  Sidebar, 
  PostContainer,
  SidebarContainer
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

export const Posts = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const posts = useSelector(state => state.post.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

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
          {posts.map(post => (
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