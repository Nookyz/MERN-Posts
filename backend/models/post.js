const {Schema, model, Types } = require('mongoose')

const postSchema = new Schema({
  userName: { 
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  watched: [
    {
      user: {
        type: Types.ObjectId,
        ref: 'User'
      }
    }
  ],
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: Types.ObjectId,
        ref: 'User'
      }
    }
  ],
  comments: [
    {
      user: {
        type: Types.ObjectId,
        ref: 'User'
      },
      text: {
        type: String,
        required: true
      },
      userName: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  user : {
    type: Types.ObjectId,
    ref: 'User'
  }
})

module.exports = model('Post', postSchema)