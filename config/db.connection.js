var express = require('express');
var mysql = require('mysql');
var cors = require("cors");

var app = express();


app.use(express.json());
app.use(cors());

var con = mysql.createConnection({

  host: "192.168.64.2",
  user: "newuser",
  password: "password",
  database: "SEGP"
});

app.post('/register', (req, res) => {

  const username = req.body.username
  const password = req.body.password

  con.query(
    "INSERT into users (username, password) VALUES (?,?)", 
    [username, password], 
    (err, result) => {
      console.log(err);
    }
  );
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



module.exports = con;