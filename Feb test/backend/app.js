const express = require("express")
const app = express()
const cors=require('cors')
app.use(cors())
const parser= require("body-parser")
const { get } = require("mongoose")
const couponroute = require("./Routes/couponroute")
const googleroute = require("./Passport/googlelogin")
const playroute = require("./Routes/playroute")
const port = 1111
require('./Database/mongoose')
app.use(parser.urlencoded({extended:true}))
app.use(parser.json())
app.get('/',(req,res)=>
{
    res.send("Srerver running")
})

app.use('/coupon',couponroute)
app.use('/google',googleroute)
app.use('/playground',playroute)



app.listen(port,()=>console.log("port on 1111"))