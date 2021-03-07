const port = process.env.PORT || 1111
const express=require("express")
const app = express()
const cors=require('cors')
require('./Database/mongoose')
const parser = require("body-parser")
const googleroute = require("./Passport/googlelogin")
const Adminroute = require("./Routes/Adminroute")
const Userroute = require("./Routes/Userroute")
app.use(cors())
app.use(parser.urlencoded({extended:true}))
app.use(parser.json())

app.get('/',(req,res)=>
{
    return res.send("Server on 1111")
})

app.use('/google',googleroute)
app.use('/admin',Adminroute)
app.use('/user',Userroute)

app.listen(port,()=>console.log("Server on 1111"))