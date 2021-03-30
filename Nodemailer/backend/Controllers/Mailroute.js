const express = require("express");
const mailroute = express.Router();
const nodemailer = require("nodemailer");
let otp = "";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "benjimenrichards335@gmail.com",
    pass: "Benjimen#123",
  },
});

mailroute.post("/", (req, res) => {
  otp = Math.floor(Math.random() * 9999) + 1;
  let mailoptions = {
    from: "benjimenrichards335@gmail.com",
    to: "richardsbenjialfred@gmail.com",
    subject: "Testing nodemailer",
    text: `Hello benjimen ur otp is ${otp}`,
  };
  transporter.sendMail(mailoptions, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(`${otp}`);
    }
  });
});

mailroute.post('/auth',(req,res)=>
{
    const verify=parseInt(req.headers['otp'])
    if(otp === verify)
    {
        res.send({
            s:"success",
            otp,
            verify
        })
    }
    else
    {
        res.send({
            s:"invalid",
            otp,
            verify
        })
    }
})


module.exports = mailroute;
