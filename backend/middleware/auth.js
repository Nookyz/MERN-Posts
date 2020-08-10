const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  if(req.method === 'OPTIONS'){
    return next()
  }
  try {
    
    const [type, token] = req.headers.authorization.split(' ') // "Bearer TOKEN"
    
    if(!token){
      return res.status(401).json({ message: 'Нет авторизации' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = decoded 
    
    next()

  } catch (e) {
    res.status(401).json({ message: 'Нет авторизации' })
  }
}