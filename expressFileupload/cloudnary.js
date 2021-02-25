const express = require('express');
const parser = require("body-parser")
const app = express()
const cloudinary = require("cloudinary").v2
const port  = 1111

app.use(parser.urlencoded({extended:true}))
app.use(parser.json())

app.set("view engine","ejs")
app.set("views","./src/views")
app.get('/',(req,res)=>{
    res.render("upload")
})
cloudinary.config({
    cloud_name:"dsfndety9",
    api_key:"678391897885718",
    api_secret:"LFzaERVOco4IKpbQHyGjIswQFAo"
})
app.post('/profile',(req,res)=>{
    const data = req.body.image
    cloudinary.uploader.upload(data).then(res=>{
        message:"uploaded",res
    }).catch(err=>{
        message:"not uploaded",err
    })
    // console.log("data",data)
    res.send("done")
})

app.listen(port,()=>console.log("port on",port))