const express = require('express')
const PORT =8080
const app =express()
const bodyParser= require('body-parser')
const API_Route =require('./routes')
const cors =require('cors')
require('./db_init');

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.get('/',(req,res,next)=>{
    res.send('Welcome to e-commerce site')
})
app.use('/',API_Route)
app.use( (err,req,res,next)=>{
    console.log('error from app level',err)
    res.status(err.status || 400)
    res.json({
        text:'error handling milddleware',
        err:err.msg || err,
    })

})

app.listen(PORT,(err,done)=>{
    if(err){
        return console.log('error is listening >>>',err)
    }
    console.log('Express server listening at port >>>' + PORT)
})