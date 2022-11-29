const express = require('express')
const PORT =8080
const app =express()
require('./db_init');

app.get('/',(req,res,next)=>{
    res.send('Welcome to e-commerce site')
})
app.use( (err,req,res,next)=>{
    console.log('error from app level',err)
    res.status(err.status || 400)
    res.json({
        text:'run error handling milddleware',
        err:err.msg || err,
    })

})

app.listen(PORT,(err,done)=>{
    if(err){
        return console.log('error is listening >>>',err)
    }
    console.log('Express server listening at port >>>' + PORT)
})