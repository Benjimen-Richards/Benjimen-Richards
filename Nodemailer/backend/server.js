
const express=require('express')
const mailroute = require('./Controllers/Mailroute')
const app = express()
const dotenv = require('dotenv').config()
const port  = process.env.PORT

app.use('/mail',mailroute)
app.listen(port,()=>console.log("server on ",port))