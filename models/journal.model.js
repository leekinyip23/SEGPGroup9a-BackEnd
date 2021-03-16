const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model');

//defines the structure of our documents
const journalSchema = new Schema({
  // journal: [
  //   {
  //     userId: String,
  //     title: String,
  //     body: String,
  //     mood: Number
  //   }
  // ]
  userId: String,
  title: String, 
  body: String,
  mood: Number
},{timestamps: true});

//provides an interface for schema to communicate with database collection 
const Journal = mongoose.model('Journal', journalSchema)

module.exports = Journal;    