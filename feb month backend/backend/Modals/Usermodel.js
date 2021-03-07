const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    name:{
        type:String
    },
    coupons:[{type:Object}],
    count:{
        type:Number
    },
    token:{
        type:String
    }
})
const User = mongoose.model("couponuser",userschema)

module.exports=User