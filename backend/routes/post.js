const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const {check, validationResult} = require('express-validator')

const User = require('../models/user')
const Post = require('../models/post')

// POST api/posts
// create post 
router.post('/', [auth, [
  check('title', 'Text is required').not().isEmpty(),
  check('text', 'Text is required').not().isEmpty(),
  check('type', 'Text is required').not().isEmpty()
]], async (req, res) => {
  try {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array()
      })
    }

    const user = await User.findById(req.user.userId).select('-password')

    const newPost = new Post({
      title: req.body.title, 
      text: req.body.text,
      type: req.body.type, 
      userName: user.userName,
      avatar: user.avatar,
      user: req.user.userId
    })

    const post = await newPost.save()

    res.json(post)

  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server error')
  }
})

// GET api/posts
// get all posts
router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 })
    
    res.json(posts)
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server error')
  }
})

// GET api/posts/:id
// get post by id
router.get('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    
    if(!post){
      return res.status(404).json({ message: 'Post not found'})
    }
    const watched = post.watched.filter(w => w.user.toString() === req.user.userId).length > 0

    if(watched){
      return res.status(200).json(post)
    }
    
    post.watched.push({ user: req.user.userId})
    
    await post.save()

    res.status(200).json(post)
  } catch (error) {
    console.log(error.message)

    if(error.kind === 'ObjectId'){
      return res.status(404).json({ message: 'Post not found'})
    }

    res.status(500).send('Server error')
  }
})

// DELETE api/posts/:id
// delete post
router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    if(post.user.toString() !== req.user.userId){
      return res.status(401).json({ message: 'User not authorized'})
    }

    if(!post){
      return res.status(404).json({ message: 'Post not found'})
    }

    await post.remove()

    res.json({ message: 'Post removed'})
  } catch (error) {
    console.log(error.message)

    if(error.kind === 'ObjectId'){
      return res.status(404).json({ message: 'Post not found'})
    }

    res.status(500).send('Server error')
  }
})

// PUT api/posts/like/:id
// like post
router.put('/like/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    const like = post.likes.filter(like => like.user.toString() === req.user.userId).length > 0
    
    if(like){
      return res.status(400).json({ message: 'Post already liked'})
    }

    post.likes.unshift({ user: req.user.userId})

    await post.save()

    res.json(post.likes)

  } catch (error) {
    console.log(error.message)
    console.log(req.user)
    res.status(500).send('Server error')
  }
})

// PUT api/posts/unlike/:id
// unlike post
router.put('/unlike/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    const like = post.likes.filter(like => like.user.toString() === req.user.userId).length === 0

    if(like){
      return res.status(400).json({ message: 'Post has not yet unliked'})
    }

    const removeIndex = post.likes.map(like => like.user.toString()).indexOf(req.user.userId)

    post.likes.splice(removeIndex, 1)

    await post.save()

    res.json(post.likes)

  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server error')
  }
})

// POST api/posts/comment/:id
// comment a post
router.post('/comment/:id', [auth, [
  check('text', 'Text is required').not().isEmpty()
]], async (req, res) => {
  try {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array()
      })
    }

    const user = await User.findById(req.user.userId).select('-password')

    const post = await Post.findById(req.params.id)

    const newComment = {
      text: req.body.text,
      userName: user.userName,
      avatar: user.avatar,
      user: req.user.userId
    }

    post.comments.unshift(newComment)

    await post.save()

    res.json(post.comments)

  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server error')
  }
})

// DELETE api/posts/comment/:id/:comment_id
// delete comment
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)

    const comment = post.comments.find(comment => comment.id === req.params.comment_id)

    if(!comment){
      return res.status(404).json({ message: 'Comment does not exist'})
    }
    
    if(comment.user.toString() !== req.user.userId){
      return res.status(401).json({ message: 'User not authorized'})
    }

    post.comments = post.comments.filter(({ id }) => id !== req.params.comment_id)

    await post.save()

    res.json(post.comments)

  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server error')
  }
})

module.exports = router