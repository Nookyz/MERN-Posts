import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, filterPosts } from '../../redux/actions/post'
import { Post } from '../Post/Post'
import { useHistory } from 'react-router'
import { toUpperCaseHandler } from '../../utils/helper'
import {
  Container, 
  Grid, 
  Sidebar, 
  PostContainer,
  SidebarContainer,
  NoPosts
} from './Posts.styled'
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
  NextButton,
  Loader
} from '../../global/GlobalStyle'

export const FilteredPosts = ({match}) => {

  const dispatch = useDispatch()
  const history = useHistory()

  const posts = useSelector(state => state.post.filteredPost)
  const loading = useSelector(state => state.post.loading)

  useEffect(() => {
    (async function(){
      await dispatch(getPosts())
      await dispatch(filterPosts(toUpperCaseHandler(match.params.type)))
    })()
  }, [dispatch, match.params.type])

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
          {loading ? <div style={{alignItems: 'center', justifyContent: 'center',marginTop: '50px'}}><Loader/></div> :
            !posts.length ? <NoPosts>Таких постов нету</NoPosts> :
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
            ))
          }
        </PostContainer>
        
      </Grid>
    </Container>
  )
}