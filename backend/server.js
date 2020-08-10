const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const app = express()

dotenv.config({path: './config/config.env'})

connectDB()

app.use(morgan('dev'))
app.use(express.json()) 
app.use(cors())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'))
app.use('/api/posts', require('./routes/post'))
app.use('/api/profile', require('./routes/profile'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server has been running on port ${PORT}`)
})