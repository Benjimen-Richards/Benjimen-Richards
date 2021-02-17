const express = require('express');
const app = express()
// const mongourl = "mongodb+srv://benjimen:richards@cluster0.36l95.mongodb.net/<dbname>?retryWrites=true&w=majority"
const mongourl = "mongodb://localhost:27017"
const session = require("express-session")
const parser = require("body-parser");
const cors = require("cors")
const collection_name = "hotelusers"
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient
const port = process.env.PORT || 1234
let database

app.use(cors())
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

app.use(session({ secret: "bookingtoken" }))

app.get('/hotel/users', (req, res) => {
    database.collection(collection_name).find({}).toArray((err, result) => {
        return res.send(result)
    })
})

app.post('/hotel/login', (req, res) => {
    database.collection(collection_name).findOne({ email: req.body.email, password: req.body.password }, (err, result) => {
        req.session.logintoken = result
        return res.send(result)
    })
})

app.put('/hotel/edit/:id', (req, res) => {
    var id = req.params.id
    database.collection(collection_name).updateOne({ _id: mongodb.ObjectID(id) }, {
        $set: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role ? req.body.role : "User"
        }
    }, (err, result) => {
        if (err) throw err
        res.send("edit Success")
    })
})

app.get('/hotel/users/:id', (req, res) => {
    database.collection(collection_name).findOne({ _id: mongodb.ObjectID(req.params.id) }, (err, result) => {
        if (err) throw err
        res.send(result)
    })
})
app.delete('/hotel/delete/:id', (req, res) => {
    database.collection(collection_name).removeOne({ _id: mongodb.ObjectID(req.params.id) })
})
app.post("/hotel/register", (req, res) => {
    var user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role ? req.body.role : "User"
    }
    database.collection(collection_name).insert(user, (err, result) => {
        return res.send("Registration success")
    })
})


mongoClient.connect(mongourl, (err, connection) => {
    database = connection.db('benjimen')
    app.listen(port, (err, result) => {
        if (err) console.log('Cannot cannot to database')
        console.log('Connection successful on', port)
    })
})



