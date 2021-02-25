const express = require('express');
const app = express()
const port = 1111
const parser = require('body-parser')

app.use(parser.urlencoded({extended:true}))
app.use(parser.json())

const pg = require('pg').Pool
const qry = new pg({
    host:'localhost',
    password:'richards',
    database:'postgres',
    user:'postgres',
    port:5432
})

app.get('/users',(req,res)=>{
    qry.query('select * from customers order by id desc',(err,result)=>
    {
        res.send(result.rows)
    })
})

app.post('/adduser',(req,res)=>{
    const {first_name,last_name,gender,phone_number,email}=req.body
    // console.log(first_name,last_name,gender,phone_number,email)
    qry.query(`insert into customers(first_name,last_name,gender,phone_number,email) 
    values( $1,$2,$3,$4,$5)`,[first_name,last_name,gender,phone_number,email],(err,result)=>{
        res.send("data added")
    })
})
app.put('/updateuser/:id',(req,res)=>
{
    const {first_name,last_name,gender,phone_number,email,id}=req.body
    qry.query(`update customers set first_name=$1,last_name=$2,gender=$3,phone_number=$4,email=$5 where id=$6`,[first_name,last_name,gender,phone_number,email,id],(err,result)=>{
        res.send("updated")
    }) 
})
app.delete('/updateuser/:id',(req,res)=>
{
    const {id}=req.body
    qry.query(`delete from  customers where id=$1`,[id],(err,result)=>{
        res.send("Deleted")
    }) 
})

app.listen(port,()=>console.log("port on",port))
