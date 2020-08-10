import {postsConstants} from '../types'

const initialState = {
  posts: [],
  filteredPost: [],
  myPosts: [],
  post: null,
  loading: false,
  error: {}
}

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action
  
  switch(type){
    case postsConstants.POSTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case postsConstants.FILTER_POSTS: 
      return {
        ...state,
        loading: false,
        filteredPost: state.posts.filter(post => post.type.toLowerCase() === payload.toLowerCase())
      }
    case postsConstants.GET_MY_POSTS: 
      return {
        ...state,
        loading: false,
        myPosts: state.posts.filter(post => post.user === payload)
      }
    case postsConstants.GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      }
    case postsConstants.GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
      }
    case postsConstants.ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false
      }
    case postsConstants.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        filteredPost: state.filteredPost.filter(post => post._id !== payload),
        myPosts: state.myPosts.filter(post => post._id !== payload),
        loading: false
      }
    case postsConstants.UPDATE_LIKES:
      
      return {
        ...state,
        posts: state.posts.map(post => post._id === payload.id 
          ? {...post, likes: payload.likes} : post
        ),
        post: { ...state.post, likes: payload.likes },
        loading: false
      }
    case postsConstants.ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: payload },
        loading: false
      }
    case postsConstants.REMOVE_COMMENT: 
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(comment => comment._id !== payload)
        },
        loading: false
      }
    case postsConstants.POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default: 
      return state
  }
}