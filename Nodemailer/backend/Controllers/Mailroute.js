const express=require('express')
const mailroute = express.Router()
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'benjimenrichards335@gmail.com',
        pass:'Benjimen#123'
    }
})

let mailoptions = {
    from :"benjimenrichards335@gmail.com",
    to:"richardsbenjialfred@gmail.com",
    subject:"Testing nodemailer",
    text:"hello Benjimen"
}

transporter.sendMail(mailoptions,(err,data)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("Email send")
    }
})

mailroute.get('/',(req,res)=>
{
    res.send("mail route")
})
module.exports=mailroute