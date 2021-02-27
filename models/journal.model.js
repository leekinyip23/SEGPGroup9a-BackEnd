const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//defines the structure of our documents
const journalSchema = new Schema({
  userId: [{ UserId: Number}],
  content: [String ]
},{timestamps: true});

//provides an interface for schema to communicate with database collection 
const Journal = mongoose.model('Journal', journalSchema)

module.exports = Journal;