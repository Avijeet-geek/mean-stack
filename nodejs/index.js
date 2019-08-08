const express = require ('express');
const bodyParser = require ('body-parser');
const {mongoose} = require ('./db.js');
var {employeeController}=require('../nodejs/controllers/employeeController');
const router = express.Router();

var app = express();
//configure express middleware in order to send json data in node js project

app.use(bodyParser.json())

//starting server 

app.listen(3000,()=>console.log('server started at port :3000'));
//err=>{    console.log('error'+ JSON.stringify(err,undefined,2))}

app.use('/employees',require('./controllers/employeeController.js'));