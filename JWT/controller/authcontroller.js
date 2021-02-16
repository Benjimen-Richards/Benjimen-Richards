const express = require("express")
const router = express.Router()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const user = require("../model/usermodel")
const config = require("../config")

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.get('/users', (req, res) => {
    user.find({}, (err, data) => {
        if (err) throw err
        res.send(data)
    })
})

router.post('/register', (req, res) => {
    // var password = "123456"
    var hashpassword = bcrypt.hashSync(req.body.password, 8)
    var data = {
        name: req.body.name,
        password: hashpassword,
        email: req.body.email,
        role: req.body.role ? req.body.role : "User"
    }
    user.create(data, (err, user) => {
        if (err) throw err
        res.send("Registration Success")
    })
})

router.post('/login', (req, res) => {
    user.findOne({ email: req.body.email }, (err, data) => {
        if (err) throw err
        else {
            const match = bcrypt.compareSync(req.body.password, data.password)
            if (!match) {
                return res.send("invalid password")
            }
            else {
                var token = jwt.sign({ id: data._id }, config.secret, { expiresIn: 10 })
                res.send({ loggedIn: true, token })
            }
        }
    })
})

router.get('/userinfo', (req, res) => {
    var token = req.headers['usertoken']
    if (!token) return res.send("No Token provided")
    jwt.verify(token, config.secret, (err, result) => {
        if (err) return res.send("Invalid token")
        user.findById(result.id, { password: 0 }, (err, data) => {
            res.send(data)
        })
    })

})
module.exports = router
