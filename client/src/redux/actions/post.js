import axios from 'axios'
import { setAlert } from './alert'
import {postsConstants} from '../types'

// get all posts
export const getPosts = () => async dispatch => {
  try {
    dispatch({type: postsConstants.POSTS_REQUEST})
    
    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.token}` 
      }
    }

    const response = await axios.get('/api/posts', config)
    
    dispatch({type: postsConstants.GET_POSTS, payload: response.data})

  } catch (error) {
    console.log(error)
  }
}

// Get post one
export const getPost = id => async dispatch => {
  try {
    dispatch({type: postsConstants.POSTS_REQUEST})

    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.token}` 
      }
    }
    const response = await axios.get(`/api/posts/${id}`, config);

    dispatch({
      type: postsConstants.GET_POST,
      payload: response.data
    })
    
  } catch (error) {
    console.log(error)
  }
}

// like post by id
export const like = id => async dispatch => {
  try {
    
    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.token}` 
      }
    }
    
    const response = await axios.put(`/api/posts/like/${id}`, null, config)

    dispatch({
      type: postsConstants.UPDATE_LIKES, 
      payload: {id, likes: response.data}
    })

  } catch (error) {
    console.log(error)
  }
}
// unlike post by id
export const unlike = id => async dispatch => {
  try {
    
    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.token}` 
      }
    }

    const response = await axios.put(`/api/posts/unlike/${id}`, null, config)

    dispatch({type: postsConstants.UPDATE_LIKES, payload: {id, likes: response.data}})

  } catch (error) {
    console.log(error)
  }
}

// add post
export const addPost = data => async dispatch => {
  try {

    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.token}` 
      }
    }

    const response = await axios.post('/api/posts', data, config)

    dispatch({
      type: postsConstants.ADD_POST,
      payload: response.data
    })

    dispatch(setAlert('Создан пост', 'success'))
  } catch (error) {
    console.log(error)
  }
}

// Delete post
export const deletePost = id => async dispatch => {
  try {
    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.token}` 
      }
    }

    await axios.delete(`/api/posts/${id}`, config)

    dispatch({
      type: postsConstants.DELETE_POST,
      payload: id
    })

    dispatch(setAlert('Пост удален', 'success'))
  } catch (error) {
    console.log(error)
  }
}

// Add comment
export const addComment = (postId, data) => async dispatch => {
  try {
    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.token}` 
      }
    }
    const response = await axios.post(`/api/posts/comment/${postId}`, data, config)

    dispatch({
      type: postsConstants.ADD_COMMENT,
      payload: response.data
    })

    dispatch(setAlert('Коментарий добавлен', 'success'))
  } catch (error) {
    console.log(error)
  }
}

// Delete comment
export const deleteComment = (postId, commentId) => async dispatch => {
  try {
    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.token}` 
      }
    }

    await axios.delete(`/api/posts/comment/${postId}/${commentId}`, config)

    dispatch({
      type: postsConstants.REMOVE_COMMENT,
      payload: commentId
    })

    dispatch(setAlert('Коментарий удален', 'success'))
  } catch (error) {
    console.log(error)
  }
}

export const filterPosts = type => dispatch => {
  dispatch({type: postsConstants.POSTS_REQUEST})

  dispatch({type: postsConstants.FILTER_POSTS, payload: type})
}

export const myPosts = id => dispatch => {
  dispatch({type: postsConstants.POSTS_REQUEST})

  dispatch({type: postsConstants.GET_MY_POSTS, payload: id})
}