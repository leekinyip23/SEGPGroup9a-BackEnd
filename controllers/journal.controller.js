'use strict';

const Journal = require('../models/journal.model');

exports.findAll = function(req, res) {

Journal.findAll(function(err, journal) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', journal);
  res.send(journal);
});
};

exports.create = function(req, res) {

const new_journal = new Journal(req.body);

//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}
else
{
Journal.create(new_journal, function(err, journal) {
  if (err)
  res.send(err);
  res.json({error:false,message:"journal added successfully!",data:journal});
});
}
};

exports.findById = function(req, res) {

Journal.findById(req.params.id, function(err, journal) {
  if (err)
  res.send(err);
  res.json(Journal);
});
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }
  else
  {
    Journal.update(req.params.id, new Journal(req.body), function(err, journal) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Journal successfully updated' });
});
}
};

exports.delete = function(req, res) {

Journal.delete( req.params.id, function(err, journal) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Journal successfully deleted' });
});
};