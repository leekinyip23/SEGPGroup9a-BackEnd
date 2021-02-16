'use strict';
var dbConn = require('../config/db.connection'); 

//Journal object create
var Journal = function(journal){
  this.mood     = journal.mood;
  this.content      = journal.content;
  this.username = journal.username;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};

Journal.create = function (newJournal, result) {
dbConn.query("INSERT INTO journal set ?", newJournal, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};

Journal.findById = function (id, result) {
dbConn.query("Select * from journals where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};

Journal.findAll = function (result) {
dbConn.query("Select * from journals", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('journal : ', res);
  result(null, res);
}
});
};

Journal.update = function(id, journal, result){
dbConn.query("UPDATE journal SET username=?,mood=?,content=?", [journal.username, journal.mood, journal.content], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

Journal.Delete = function(id, result){
dbConn.query("DELETE FROM journal WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};

module.exports= Journal;
