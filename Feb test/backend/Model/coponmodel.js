const mongoose=require("mongoose")

const couponschema=new mongoose.Schema(
    {
        name:{
            type:String,
        },
        off:{
            type:String,
            
        },
        website:{
            type:String,
            
        },
        url:{
            type:String
        },
        date: { type: Date, default: Date.now },
        category:{
type:String
        },
        code:{
            type:String
        }
        ,isactive:{
            type:Boolean,
        }
        
    }
)
const coupon = mongoose.model("coupon",couponschema)
module.exports=coupon