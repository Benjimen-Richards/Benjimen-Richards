const express = require('express')
const app = express()
var adminrouter = express.Router()
const collection_name = "blog"
const mongo = require("mongodb")
const mongoClient = mongo.MongoClient
const mongourl = "mongodb://localhost:27017"
let database

adminrouter.route('/allusers')
    .get((req, res) => {
        if (!req.session.logintoken) {
            return res.redirect("/?message=Login to continue")
        }
        if (req.session.logintoken.role !== "Admin") {
            return res.redirect("/")
        }
        database.collection(collection_name).find({}).toArray((err, result) => {
            return res.render("admin", { data: result, userdata: req.session.logintoken })
            // return res.send(result)
        })
    })

adminrouter.route('/getuserdetails/:id')
    .get((req, res) => {
        if (!req.session.logintoken) {
            return res.redirect("/?message=Login to continue")
        }
        if (req.session.logintoken.role !== "Admin") {
            return res.send("You are not admin")
        }
        let id = req.params.id
        database.collection(collection_name).findOne({ _id: mongo.ObjectID(req.params.id) }, (err, result) => {
            return res.render("edituserpage", { data: result })
        })
    })
adminrouter.route('/adminedituser/:id')
    .post((req, res) => {
        database.collection(collection_name).updateOne({ _id: mongo.ObjectID(req.params.id) }, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                role: req.body.role,
                isActive: req.body.isActive,
                password: req.body.password
            }
        }, (err, result) => {
            res.redirect('/admin/allusers')
            // res.send(result)
        })
    })

adminrouter.route('/deleteuser/:id').get((req, res) => {
    if (!req.session.logintoken) {
        res.redirect("/?message=Login to continue")
    }
    const id = req.params.id
    database.collection(collection_name).removeOne({ _id: mongo.ObjectID(id) }, (err, result) => {
        if (err) throw err
        res.redirect('/admin/allusers')
    })
})
adminrouter.route('/adduser').get((req, res) => {
    let message = req.query.message ? req.query.message : ""
    res.render("adduser", { message })
})
adminrouter.route('/postuser').post((req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role ? req.body.role : "User",
        isActive: true
    }
    database.collection(collection_name).findOne({ name: user.name, email: user.email }, (err, result) => {
        if (result) {
            res.redirect("/admin/adduser?message=User already exists")
        }
        else {
            database.collection(collection_name).insert(user, (err, result) => {
                return res.redirect("/admin/allusers")
            })
        }
    })
})
mongoClient.connect(mongourl, (err, conection) => {
    if (err) throw err
    database = conection.db("benjimen")
})
module.exports = adminrouter