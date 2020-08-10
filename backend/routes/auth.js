const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/user')


// GET api/auth/register
// REGISTER
router.post('/register', [
  check('userName', 'Name is required').not().isEmpty(),
  check('email', 'Invalid email').isEmail(),
  check('password', 'Password length min 6 characters').isLength({min: 6})
], async (req, res) => {
  try {

    const errors = validationResult(req)

    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные при регистрации'
      })
    }

    const {userName, email, password} = req.body

    const userEmail = await User.findOne({ email })

    if(userEmail){
      return res.status(400).json({message: 'Такой пользователь уже существует'})
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const avatar = gravatar.url(email, {
      s: '200',
      r: 'pg',
      d: 'mm'
    })

    const user = new User({userName, email, password: hashedPassword, avatar})

    await user.save()

    res.status(201).json({ message: 'Пользователь создан'})
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ message: 'Ошибка при регистрации, попробуйте снова'})   
  }
})

// GET api/auth/login
// LOGIN
router.post('/login', [
  check('email', 'Invalid email').isEmail(),
  check('password', 'Password is required').exists()
], async (req, res) => {
  try {

    const errors = validationResult(req)

    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные при входе'
      })
    }

    const {email, password} = req.body

    const user = await User.findOne({ email })

    if(!user){
      return res.status(400).json({ message: 'Неправильный пароль или e-mail'})
    }

    const bcryptPassword = await bcrypt.compare(password, user.password)

    if(!bcryptPassword){
      return res.status(400).json({ message: 'Неправильный пароль или e-mail'})
    }

    const payload = { userId: user._id, userName: user.userName }

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )
    
    res.json({ token })

  } catch (error) {
    console.error(error.message)
    res.status(500).json({ message: 'Ошибка при регистрации, попробуйте снова'})   
  }
})

module.exports = router
