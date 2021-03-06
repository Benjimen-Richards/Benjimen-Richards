const express=require('express')
const categories = require('../Model/categoriesModel')
const coupon = require('../Model/coponmodel')
const couponroute=express.Router()
const qr=require('qrcode')
couponroute.post('/add',(req,res)=>{
    const data = new coupon({...req.body,isactive:true})
    data.save().then(()=>res.send("success"))}
)
couponroute.get('/',(req,res)=>
{
    coupon.find({}).then(result=>res.send(result))
})
couponroute.get('/categories',(req,res)=>
{
    categories.find({}).then(result=>res.send(result))
})
couponroute.post('/categories',(req,res)=>
{
    const data = new categories(req.body)
    data.save().then(()=>res.send("success"))
})

couponroute.put('/put',(req,res)=>
{
    categories.updateMany({"name": "jewellery"},{$set:{"name": "Jewellery"}}).then(result=>res.send(result))
})

couponroute.get('/category/:category',(req,res)=>
{
    coupon.find({category:req.params.category}).then(result=>res.send(result))
})
couponroute.post('/validate/:token',(req,res)=>
{
    const token = req.params.token
    qr.toDataURL(token,(err,src)=>
    {
        if(err) console.log(err)
        res.send(src)
    })
    
})

module.exports=couponroute
