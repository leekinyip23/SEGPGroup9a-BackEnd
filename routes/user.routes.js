const express = require('express')
const router = express.Router();
const User = require('../models/user.model');

//routes

//Get a User's details
router.post('/fetch', async(req, res) => {
  try{
    const user = await User.find({username: req.body.username});
    res.json(user);
  }catch (err){
    console.log('failed');
    res.json({message: err});
  }
})

//add a new user
router.post('/add', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    try{
        const savedUser = await user.save();
        res.json(savedUser);
    } catch(err){
        res.json({ message: err });
    }
});

  //Update a specific User
  router.post('/update', async (req,res) => {
    try{
      const updatedUser = await User.where({_id: req.body._id}).updateOne({$set:{username: req.body.username, password: req.body.password}});
      res.json(updatedUser);
    }  catch(err){
      console.log('failed');
      res.json({ message: err });
    }
  });
  
  //Delete a specific user
  router.post('/delete', async (req, res) => {
    try{
      const deletedUser = await User.remove({_id: req.body._id})
      res.json(deletedUser);
    } catch (err){
      res.json({message: err});
    }
  })
  
  module.exports = router