const express = require('express');
const redis = require("redis");
const axios = require('axios');
const { json } = require('express');
const mongodb = require("mongodb")
const mongoClient = mongodb.MongoClient
const mongourl = "mongodb://localhost:27017"
let database
const collection_name = "hotelusers"


const port = 1111
const client = redis.createClient({
    host: "localhost",
    port: 6379
})
const app = express()

app.get('/data', (req, res) => {
    const userinput = (req.query.userid).trim()
    client.get(`userid:${userinput}`, (err, result) => {
        if (result) {
            const output = JSON.parse(result)
            return res.send(output)
        }
        else {
            mongoClient.connect(mongourl, (err, connection) => {
                if (err) throw err
                database = connection.db('benjimen')
                let id = mongodb.ObjectID(userinput)
                database.collection(collection_name).findOne({ _id: id }, (err, result) => {
                    const output = result
                    client.setex(`userid:${userinput}`, 3000, JSON.stringify({ source: "redis", output }))
                    return res.send({ source: "mongodb", output })
                })

            })
        }
    })
    // res.send(userinput)
})


app.listen(port, () => {
    console.log("port on", port)
})