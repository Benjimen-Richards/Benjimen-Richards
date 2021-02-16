const express = require("express")
const app = express()
const port = process.env.PORT || 1234

const db = require("./db")

const cors = require("cors")

app.use(cors())

const authcontroller = require("./controller/authcontroller")

app.use('/api/auth', authcontroller)

app.listen(port, () => {
    console.log("server started on ", port)
})