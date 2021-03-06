const mongoose=require("mongoose")

const categoriesschema=new mongoose.Schema(
    {
        name:{
            type:String,
        }
    }
)
const categories = mongoose.model("categories",categoriesschema)
module.exports=categories