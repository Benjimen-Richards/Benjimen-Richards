const express= require("express")
const adminroute = express.Router()

const mongodb = require('mongodb')
const client = mongodb.MongoClient
let database 
const collection_name="admin"
const mongourl = "mongodb://localhost:27017"


adminroute.get('/',(req,res)=>{
    database.collection(collection_name).find({}).toArray((err,result)=>{
        if(err) console.log("not connecting")
        res.send(result)
    })
})
adminroute.post('/adduser',(req,res)=>{
    const user ={
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            role:req.body.role?req.body.role:"User",
            isActive:req.body.isActive?"true":"false"
    }
    database.collection(collection_name).insert(user, (err, result) => {
        database.collection(collection_name).find({}).toArray((err,result)=>{
            if(err) console.log("not connecting")
            res.send(result)
        })
    })
    // res.send(user)
})
adminroute.get('/getuser/:id',(req,res)=>{
    
    database.collection(collection_name).findOne({_id:mongodb.ObjectID(req.params.id)},(err,result)=>{
        if(err) console.log("not connecting")
        res.send(result)
    })
    // res.send(user)
})
adminroute.delete('/delete/:id',(req,res)=>{
    database.collection(collection_name).deleteOne({_id:mongodb.ObjectID(req.params.id)},(err,result)=>{
        if(err) console.log("not deleting")
        database.collection(collection_name).find({}).toArray((err,result)=>{
            if(err) console.log("not connecting")
            res.send(result)
        })
    })
    // res.send(user)
})

adminroute.put('/edituser/:id',(req,res)=>
{
    database.collection(collection_name).updateOne({_id:mongodb.ObjectID(req.params.id)},{
        $set:{
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            role:req.body.role?req.body.role:"User",
            isActive:req.body.isActive
        }
    },(err, result) => {
        database.collection(collection_name).find({}).toArray((err,data)=>{
            if(err) console.log("not connecting")
            res.send(data)
        })
})})


client.connect(mongourl,(err,connection)=>{
    database=connection.db("playground")
})

module.exports=adminroute