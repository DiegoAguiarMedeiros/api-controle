const router = require('express').Router()
const db = require("../db")
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = process.env
const { verifyToken } = require('../middlewares/auth.middlewares')
router.get('/auth',  async (req, res) => {
    const { user, password } = req.body
    const authUser = await db.userAuth(user, password)
    if(authUser == 1){

        const token = jwt.sign({ user, password }, JWT_SECRET, { expiresIn: '1800s' })
        res.send(token)
    }else{
        res.sendStatus(406)
    }
})


module.exports = router