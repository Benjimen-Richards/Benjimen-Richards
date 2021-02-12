const express = require('express')
const app = express()
var postrouter = express.Router()
const collection_name = "Posts"
const mongo = require("mongodb")
const mongoClient = mongo.MongoClient
const mongourl = "mongodb://localhost:27017"
let database


postrouter.route('/')
    .get((req, res) => {
        if (!req.session.logintoken) {
            res.redirect("/?message=No Session Found! Please try again")
        }
        database.collection(collection_name).find({}).toArray((err, result) => {
            if (err) throw err
            res.render("posts", { userdata: req.session.logintoken, data: result })
        })

    })

postrouter.route('/addpost').get((req, res) => {
    if (!req.session.logintoken) {
        res.redirect('/')
    }
    res.render("addpost", { userdata: req.session.logintoken })
})

postrouter.route('/updatepost')
    .post((req, res) => {
        if (!req.session.logintoken) {
            res.redirect('/?message=login Required')
        }
        // console.log("login session alfred", req.session.logintoken)
        let data = {
            title: req.body.title,
            description: req.body.description,
            createBy: req.session.logintoken.name,
            createrId: req.session.logintoken._id,
            isActive: true,
            tags: req.body.tags,
            date: new Date(Date.now()).toISOString(),
            lastupdatedate: new Date(Date.now()).toISOString()
        }
        // console.log("data", data)
        database.collection(collection_name).insertOne(data, (err, result) => {
            res.redirect('/post')
        })
    })

postrouter.route('/edit/:id')
    .get((req, res) => {
        let id = req.params.id
        database.collection(collection_name).findOne({ _id: mongo.ObjectID(id) }, (err, result) => {
            if (err) throw err
            res.render("editpost", { data: result, userdata: req.session.logintoken })
        })
    })


//update post
postrouter.route('/editpost/:id')
    .post((req, res) => {
        database.collection(collection_name).updateOne({ _id: mongo.ObjectID(req.params.id) }, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                tags: req.body.tags,
                password: req.body.password
            }
        }, (err, result) => {
            res.redirect('/post')
        })
    })

postrouter.route('/delete/:id').get((req, res) => {
    let id = mongo.ObjectID(req.params.id)
    database.collection(collection_name).remove({ _id: id }, (err, result) => {
        if (err) throw err
        // res.send("deleted successfully")
        res.redirect('/post')
    })
})
mongoClient.connect(mongourl, (err, conection) => {
    if (err) throw err
    database = conection.db("benjimen")
})
module.exports = postrouter