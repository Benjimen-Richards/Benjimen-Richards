const mongoose = require("mongoose")

const Couponschema = new  mongoose.Schema({
    username:{
        type:String
    },
    couponcode:{
        type:String
    },
    websitename:{
        type:String
    },
    used:{
        type:Boolean
    },
    usedcount:{
        type:Number
    },
    websiteurl:{
        type:String
    },
    discount:{
        type:String
    },
    category:{
        type:String
    },
    token:{
        type:String
    },
    expired:{
        type:Boolean
    }
})

let coupon = mongoose.model("coupon",Couponschema)
module.exports= coupon