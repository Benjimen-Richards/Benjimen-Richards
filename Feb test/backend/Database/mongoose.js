const mongoose = require('mongoose')
const mongourl = "mongodb://localhost:27017/test"

mongoose.connect(mongourl,{useNewUrlParser:true,useFindAndModify:true})