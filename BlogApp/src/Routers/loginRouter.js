const express = require('express')
const app = express()
var loginrouter = express.Router()
const session = require('express-session')
const collection_name = 'blog'
const mongo = require("mongodb")
const mongoClient = mongo.MongoClient
const mongourl = "mongodb://localhost:27017"
let database

app.use(session({
    secret: 'mylogintoken'
}))

loginrouter.route('/register').get((req, res) => {
    let message = req.query.message ? req.query.message : ''
    return res.render("register", { message })
})
loginrouter.route('/logout').get((req, res) => {
    req.session.logintoken = {}
    console.log("logout", req.session.logintoken)
    return res.redirect("/")
    // res.send(req.session.logintoken)
})
loginrouter.route('/register').post((req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role ? req.body.role : "User",
        isActive: true
    }
    database.collection(collection_name).findOne({ email: user.email }, (err, data) => {
        if (data) {
            return res.redirect('/login/register?message=Email already taken')
        }
        else {
            database.collection(collection_name).insert(user, (err, result) => {
                if (err) throw err
                return res.redirect("/?message=Registration successfull")
                // res.send(result)
            })
        }
    })
})
loginrouter.route('/authenticate').post((req, res) => {
    let user = {
        email: req.body.email,
        password: req.body.password
    }
    database.collection(collection_name).findOne({ email: user.email }, (err, result) => {
        if (err || !result) {
            return res.redirect('/?message=Invalid credentials')
        }
        else {
            req.session.logintoken = result
            // console.log("login session", req.session.logintoken)
            return res.redirect("/post")
            // res.send(result) 
        }
    })
})



mongoClient.connect(mongourl, (err, conection) => {
    if (err) throw err
    database = conection.db("benjimen")
})
module.exports = loginrouter