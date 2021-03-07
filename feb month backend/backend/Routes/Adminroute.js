const express= require('express')
const Adminroute = express.Router()
const { v4: uuidv4 } = require('uuid');
const coupon = require('../Modals/Couponmodal');
const jwt = require('jsonwebtoken')
const config = require('../config')
Adminroute.post('/adduser',(req,res)=>
{
    var token = jwt.sign({ username: req.body.username }, config.mysecret, { expiresIn: "10s" })
    const data = {
        username:req.body.username,
        couponcode:uuidv4(),
        websitename:req.body.websitename,
        used:false,
        usedcount:0,
        websiteurl:req.body.websiteurl,
        discount:req.body.discount,
        category:req.body.category,
        token:token,
        expired:false
    }
    // console.log(data)
    const coupondata = new coupon(data)
    coupondata.save().then((r)=>res.send(r))
})

Adminroute.get('/',(req,res)=>
{
    
    coupon.find().then(r=>res.send(r))
})


Adminroute.get('/validate/:id',(req,res)=>
{
    coupon.findById(req.params.id).then(result=>
        {
                jwt.verify(result.token, config.mysecret, (err, data) => {
                    if (err) {
                        coupon.findByIdAndUpdate(req.params.id,{token:''}).then(r=>res.send(r))
                    }
                    else
                    {
                        res.send(result)
                    }
                   
                })}
        )
})


module.exports=Adminroute