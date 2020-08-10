const {Schema, model, Types } = require('mongoose')

const userSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    required: true,
    max: 255
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('User', userSchema)