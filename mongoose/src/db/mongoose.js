const mongoose = require('mongoose')
const mongourl = "mongodb://localhost:27017/richards"

mongoose.connect(mongourl,{useNewUrlParser:true,useFindAndModify:true})

