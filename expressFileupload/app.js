const express = require('express');
const parser = require("body-parser")
const app = express()
const fileupload = require("express-fileupload")
const port  = 1234

app.use(parser.json())
app.use(fileupload())

app.set("view engine","ejs")
app.set("views","./src/views")
app.get('/',(req,res)=>{
    res.render("upload")
})
app.post('/profile',(req,res)=>{
    console.log("files",req.files)
    console.log("body",req.body)
    let imagefile = req.files.avatar
    if(imagefile.mimetype === 'image/jpeg')
    {
        imagefile.mv(`${__dirname}/uploads/${imagefile.name}`,function(err,data){
            if(err) throw err
            res.send({file:"uploaded",location:`/uploads/${imagefile.name}`})
        })
    }
    else
    {
        res.send({files:"not uploaded"})
    }
})

app.listen(port,()=>console.log("port on",port))