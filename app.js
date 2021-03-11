var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/connection');
const bodyParser = require('body-parser');
const cors = require('cors');

var journalRoute = require('./routes/journal.routes');
var userRoute = require('./routes/user.routes');
var authRoute = require('./routes/auth.routes');

var app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

//set port
const PORT = process.env.PORT || 8080;

//database connection
const dbConnection = require('./config/connection');

//import routes
app.get('/', (req, res) => {
  res.send('Issa Home beech');
})

app.use('/journal', journalRoute);
app.use('/user', userRoute); 


//connection string to db
const dbURI = 'mongodb+srv://SEGPdbUser:e-GRr9a998bZLhs@cluster0.o5eht.mongodb.net/SEGP?retryWrites=true&w=majority'

//Connect to database
connectDB();

//listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
}); 

module.exports = app;
