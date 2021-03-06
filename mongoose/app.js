const express = require('express')
const user = require('./src/db/models/usermodel')
const userroute = require('./src/db/routes/user')
const app = express()
const port = 1111
require('./src/db/mongoose')
app.use(express.json())



app.use('/user',userroute)

app.listen(port,()=>console.log("port on",port))