const express = require('express')
const router = express.Router();
const User = require('../models/user.model');
var bcrypt = require("bcryptjs");

//routes

//Get a User's details
router.post('/fetch', async(req, res) => {
  try{
    const user = await User.find({_id: req.body._id});
    res.json(user);
  }catch (err){
    console.log('failed');
    res.json({message: err});
  }  
})

//add a new user
router.post('/add', async (req, res) => {

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        username: req.body.username,
        password: hashedPassword
    });
    try{
        const savedUser = await user.save();
        res.json(savedUser);
    } catch(err){
        res.json({ message: err });
    }
});

router.post('/login', async (req, res) => {
  const user = await User.findOne({username: req.body.username}).exec();
  console.log(user);
  if(user == null){
    console.log('null');
    res.json({ message: "Cannot find user" });
  }
  try {
    if(await bcrypt.compare(req.body.password, user.password)){
      res.send('Suceess');
    } else {
      res.send('failure');
    }
  } catch {
    res.status(500).send();
  }
})

  //Update a specific User
  router.post('/update', async (req,res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    try{
      const updatedUser = await User.where({_id: req.body._id}).updateOne({$set:{username: req.body.username, password: hashedPassword}});
      res.json(updatedUser);
    }  catch(err){
      console.log('failed');
      res.json({ message: err });
    }
  });
  
  //Delete a specific user
  router.post('/delete', async (req, res) => {
    try{
      const deletedUser = await User.deleteMany({_Id: req.body._Id})
      res.json(deletedUser);
    } catch (err){
      res.json({message: err});
    }
  })
  
  module.exports = router