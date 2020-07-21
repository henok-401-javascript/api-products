'use strict';
const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {product} = require ('./model/model.js');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.listen(PORT , () =>{
  console.log('server is up at ' , PORT);
})
mongoose.connection.once('open' ,() => {
  console.log('MONGODB IS ON!!');
  
});
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.get('/product' , async (req , res) =>{
  let response = await product.readAll();
  res.send(response);
})

app.post('/product' , async (req , res) =>{
  console.log('req.body',req.body);
  let response = await product.create(req.body);
  res.send(response);
})

  app.get('/' , (req , res) =>{
    console.log('home page',req.body);
    res.send('HOME PAGE');
  })
