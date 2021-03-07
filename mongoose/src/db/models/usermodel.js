const  mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const validator = require('validator');


const UserSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
       type: String,
    },
    password:{
        type:String
    },
})
 
UserSchema.statics.findByCredentials=async (email,password,err)=>
{
    let logindata =await user.findOne({email})
   if(!logindata)
   {
     return  new Error("No user found")
   }
   const ismatch =await bcrypt.compare(password,logindata.password)
   if(!ismatch)
   {
       return new Error("password doesnot match")
   }
   return logindata
}

UserSchema.pre("save",async function(next)
{
    const user = this
    if(user.isModified('password'))
    {
        user.password = await bcrypt.hashSync(user.password,8)
    }
    next()
})
const user = mongoose.model("emaildata",UserSchema)
module.exports = user