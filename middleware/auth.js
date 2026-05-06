const jwt = require('jsonwebtoken');

const handleAuth = (req, res, next)=>{
  const headerRecuest = req.headers['authorization'];
  const token = headerRecuest && headerRecuest.split(' ')[1];

  if(!token){
    return res.status(401).json({message:'Token not provided..'})
  }

  try{
    const decoder = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoder
    next()
  }catch(err){
    res.status(403).json({ message: 'Invalid token' })
  }
}

module.exports = handleAuth;


