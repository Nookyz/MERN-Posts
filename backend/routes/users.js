const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const User = require('../models/user')

// GET api/users
// get user 
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password')
    res.json(user)
  } catch (error) {
    console.log(error.message)
    res.status(500).send('Server error')
  }
})


module.exports = router