const express = require('express');
const app = express()
const superagent = require("superagent")
const request = require('request');
const { response } = require('express');
const port = 1111

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render("../src/views/login")
})

app.get('/profile', (req, res) => {
    var code = req.query.code
    if (!code) {
        res.send("failed")
    }
    superagent
        .post("https://github.com/login/oauth/access_token")
        .send({
            client_id: "ba0b96e96de583be9c86",
            client_secret: "52903743f93930efe3b2f316a353e48a5db137f8",
            code: code
        })
        .set("Accept", "application/json")
        .end((err, result) => {
            if (err) throw err
            var accestoken = result.body.access_token
            var option = {
                url: "https://api.github.com/user",
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Authorization": "token" + accestoken,
                    "user-agent": "mycode"
                }
            }
            request(option, (err, response, body) => {
                return res.send(body)
            })
        })
})
app.listen(port, () => {
    console.log("port", port)
})