const express = require('express')
const port = 1111
const app = express()
const {graphqlHTTP} = require('express-graphql')
const Schema = require('./model/Schema')

app.use('/graphql',graphqlHTTP({
    schema:Schema,
    graphiql:true
}))

app.listen(port,()=>console.log("port on 1111"))