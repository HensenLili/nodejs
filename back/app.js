const express = require('express')
const app = express()
const port = 3000

app.get('/data',(req,res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    let ms = JSON.parse('{"mes":"Hello world!"}')
    res.send(ms)
})

app.listen(port,()=>{
    console.log('listen!')
})