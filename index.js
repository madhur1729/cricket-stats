const express = require('express')
const cricData= require('cric-player-info');
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set('view engine','ejs')

app.get('/',(req,res) =>{
    res.render('index')
})

app.listen(5000,() =>{
    console.log("App is listening on Port 5000")
})