require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const authRouter = require('./src/routes/auth.router')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname+ "/html/index.html")
})
app.use('/api', authRouter)



app.listen(3000)