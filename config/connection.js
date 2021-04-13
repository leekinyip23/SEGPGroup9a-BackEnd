var express = require('express');
const app = express();
var cors = require("cors");
const mongoose = require('mongoose');

//connection string to db
const dbURI = 'mongodb+srv://SEGPdbUser:e-GRr9a998bZLhs@cluster0.o5eht.mongodb.net/SEGP?retryWrites=true&w=majority'

//Connect to database
const connectDB = async()=>{
  await mongoose.connect(dbURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
   });
  console.log('connected to database');
}

module.exports = connectDB;