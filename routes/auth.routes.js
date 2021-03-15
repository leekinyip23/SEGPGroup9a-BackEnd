const express = require('express');
const { verifyRegister } = require("../middleware");
const controller = require("../controllers/auth.controller");
const router = express.Router();

module.exports = function(app) {
  router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  router.post("/auth/signup",
    [
      verifyRegister.checkDuplicateUsername
    ],
    controller.signup
  );

  router.post("/auth/signin", controller.signin);
};