const User = require("../models/user.model");

checkDuplicateUsername = (req, res, next) => {
  // Username
  console.log('in');
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }

  });
};

const verifyRegister = {
  checkDuplicateUsername
};

module.exports = verifyRegister;