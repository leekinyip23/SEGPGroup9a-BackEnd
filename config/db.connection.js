var mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.64.2",
  user: "newuser",
  password: "password",
  database: "SEGP"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;