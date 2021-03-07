const express= require('express')
const coupon = require('../Modals/Couponmodal')
const User = require('../Modals/Usermodel')
const Userroute = express.Router()
const jwt = require('jsonwebtoken')
const config = require('../config')
const redis = require('redis');
Userroute.get('/allusers',(req,res)=>
{
    User.find().then(result=>{
        res.send(result)
    })
})
const client = redis.createClient({
    host: "localhost",
    port: 6379
})
const app = express()
Userroute.get('/data/:id', (req, res) => {
    const userinput = (req.params.id).trim()
    client.get(`userid:${userinput}`, (err, result) => {
        if (result) {
            const output = JSON.parse(result)
            return res.send(output)
        }
        else {
                coupon.findById(userinput ).then(result => {
                    const output = result
                    client.setex(`userid:${userinput}`, 10, JSON.stringify({ source: "redis", output }))
                    return res.send({ source: "mongodb", output })
                })
        }
    })
    // res.send(userinput)
})

Userroute.put('/couponcart/:id',(req,res)=>
{
    const data = req.query.coupon
    User.findById(req.params.id).then(result=>{
        User.findByIdAndUpdate(result._id,{count:result.count+1,coupons:[...result.coupons,data]}).then(r=>res.send(r))
    })
})

Userroute.post('/adduser',(req,res)=>
{
    var token = jwt.sign({ username: req.body.username }, config.mysecret, { expiresIn: "10d" })
    const data ={
        name:req.body.username,
        count:1,
        token
    }
    const userdata = new User(data)
    userdata.save().then(r=>res.send("done"))
})

Userroute.post('/login',(req,res)=>
{
    
    User.findOne({name:req.body.username}).then(result=>
        {
            if(result)
            {
                var token = jwt.sign({ name: req.body.username }, config.mysecret, { expiresIn: "1d" })
                res.send(token)
            }
            else
            {
                res.send("no user found")
            }
        })
})
Userroute.post('/verifylogin',(req,res)=>
{
    var token=req.body
    if(token)
    {
        
        jwt.verify(token, config.mysecret, (err, result) => {
            if (err) return res.send("Invalid token")
            User.findById(result.id, { password: 0 }, (err, data) => {
                res.send(result)
            })
        })
    }
    else    
    {
        res.send("nO token provided")
    }
  
})


module.exports=Userroute