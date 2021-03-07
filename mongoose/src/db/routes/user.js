const express=require('express')
const user = require('../models/usermodel')
const userroute = express.Router()
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
userroute.post('/add',async(req,res)=>
{
    const match =await user.findOne({email:req.body.email})
    if(match)
    {
        return res.send("email alrdy exists")
    }
   const data = new user(req.body)
    data.save().then(()=>res.send("Registration success"))
    .catch(err=>console.log("error with the mongoose"))
})
userroute.get('/',(req,res)=>
{
   user.find({}).then((data)=>res.send(data))
   .catch(err=>console.log(err))
})
userroute.get('/user/:id',(req,res)=>
{
   user.findById(req.params.id).then((data)=>res.send(data))
   .catch(err=>console.log(err))
})
userroute.put('/edit/:id',(req,res)=>
{
    user.findByIdAndUpdate(req.params.id,{name:req.body.name}).then((data)=>res.send(data))
    .catch(err=>console.log(err))
})
userroute.delete('/delete/:id',(req,res)=>
{
    user.findByIdAndDelete(req.params.id).then((data)=>res.send(data))
    .catch(err=>console.log(err))
})

userroute.post('/login',async(req,res)=>
{
   const data = await user.findByCredentials(req.body.email,req.body.password)
   let token =  jwt.sign({_id:data._id.toString()},"secret")
   return res.send( {data,token})
   
})
module.exports=userroute