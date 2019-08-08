const express = require ('express');
const router = express.Router();
var{ Employee } = require ('../models/empoyee.js');

//=>localhost:3000/employees
router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err){res.send(docs);}
        else {console.log('error in retriving employees :'+JSON.stringify(err,undefined,2))}
    });
});
router.post('/',(req,res)=>{
   var emp = new Employee({
       name: req.body.name,
       position : req.body.position,
       office: req.body.office,
       salary : req.body.salary,
   })
});

module.exports = router;
