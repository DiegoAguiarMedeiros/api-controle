const jwt = require('jsonwebtoken')
const {JWT_SECRET} = process.env
exports.verifyToken = (req,res,next)=>{
    const authHeader = req.headers['authorization']
    if(authHeader == undefined) return res.sendStatus(401)
    const token = authHeader || authHeader.split(' ')[1]
    
    if(token == null) return res.sendStatus(401)
    jwt.verify(token, JWT_SECRET, (err,user)  =>{
        if(err) return res.sendStatus(403)
        req.user = user;
        next()
    })
}