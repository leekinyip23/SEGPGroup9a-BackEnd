const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model');

//defines the structure of our documents
const journalSchema = new Schema({
  userId: {type: Number},
  title: {type: String},
  body: {type: String},
  mood: {type: Number}
},{timestamps: true});

//provides an interface for schema to communicate with database collection 
const Journal = mongoose.model('Journal', journalSchema)

module.exports = Journal;    