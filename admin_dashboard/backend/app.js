const express = require("express")
const bodyparser = require('body-parser')
const cors = require("cors")
const adminroute = require("./adminrouter")
const port  = process.env.PORT || 1111
const app  = express()
const mongodb = require('mongodb')
const client = mongodb.MongoClient
const collection_name="admin"
const mongourl = "mongodb://localhost:27017"


app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.get('/',(req,res)=>{
    database.collection(collection_name).find({}).toArray((err,result)=>{
        if(err) console.log("not connecting")
        res.send(result)
    })
})

app.use('/admin',adminroute)


client.connect(mongourl,(err,connection)=>{
    if(err) console.log("Not able to connect database")
    database = connection.db("playground")
    app.listen(port,()=>console.log("Port started on ",port))
})