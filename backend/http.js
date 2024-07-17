// const express=require("express");
const express = require('express')
const app = express()
const port = 3000

// app.get("/route-handler",function(req,res){
//     //header, body , query-parameter
//     //do machine learning model
//     res.json({
//         name:"adwaya",
//         age:21
//     })
// })

app.get('/', function(req, res) {
  res.send('<b> hi there </b>')
})

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})