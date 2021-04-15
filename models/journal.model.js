const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model');

//defines the structure of our documents
const journalSchema = new Schema({

  userId: {
    type: String, default: null
  },
  title: {
    type: String, default: null
  },
  body: { 
    type: String, default: null
  },
  mood:{
    type: Number, default: null
  }
},{timestamps: true});

//provides an interface for schema to communicate with database collection 
const Journal = mongoose.model('Journal', journalSchema)

module.exports = Journal;    