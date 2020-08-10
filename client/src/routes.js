import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Login } from './components/Auth/Login/Login'
import { Register } from './components/Auth/Register/Register'
import { Posts } from './components/Posts/Posts'
import { PostDetail } from './components/PostDetail/PostDetail'
import { PostCreate } from './components/Post-create/PostCreate'
import { FilteredPosts } from './components/Posts/FilteredPosts'
import { MyPosts } from './components/Posts/MyPosts'

export const useRoutes = isAuth => {
  if(isAuth){
    return (
      <Switch>
        <Route path='/' exact component={Posts}/>
        <Route path='/create-post' component={PostCreate}/>
        <Route path='/posts/:id' component={PostDetail}/>
        <Route path='/tag/:type' component={FilteredPosts}/>
        <Route path='/my-posts' component={MyPosts}/>
        <Redirect to='/'/>
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path='/' exact component={Login}/>
      <Route path='/signup' component={Register}/>
      <Redirect to='/'/>
    </Switch>
  )
}
