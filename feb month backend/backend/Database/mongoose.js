const mongoose = require('mongoose')
const mongourl = "mongodb://localhost:27017/BackendTest"

mongoose.connect(mongourl,{useNewUrlParser:true,useFindAndModify:true,useUnifiedTopology:true})