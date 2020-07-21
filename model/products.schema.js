'use strict';
const mongoose = require('mongoose');
const schema = mongoose.Schema({
name:{type:'string' , require:'true'},
description:{type:'string' , require:'true'},
stoke:{type:'Number' , require:'true'},
price:{type:'Number' , require:'true'},
category:{type:'string' , require:'true'},
img:{type:'string' , require:'true'},
})
let model = mongoose.model('products',schema);
module.exports =  model;


