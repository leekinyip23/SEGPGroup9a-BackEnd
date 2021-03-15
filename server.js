const express = require("express");
const bodyParser = require("body-parser");

// Create express app
 const app = express();

//set port
const PORT = process.env.PORT || 8080;

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to SEGP application." });
});

//Require journal routes
const journalRoutes = require('../SEGPGroup9a-BackEnd/routes/journal.routes');

//listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});  
  

