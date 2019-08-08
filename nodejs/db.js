const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/crudDb',(err)=>{
    if(!err)
    console.log('mongo connected successfully...');
    else
    console.log('mongo not conncted'+JSON.stringify(err,undefined,2));
});
