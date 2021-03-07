const express = require('express')
const router = express.Router();
const User = require('../models/user.model');

//routes

//Get User data
router.get('/', async (req, res) => {
    try{
        const user = await User.find();
        res.json(user);
      } catch (err) {
        res.json({message: err})
      }
    });



//post a user
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

//post a user
router.post('/add', async (req, res) => {
    const user = new User({
        username: testUsername,
        password: testPassword
    });
    try{
        const savedUser = await user.save();
        res.json(savedUser);
    } catch(err){
        res.json({ message: err });
    }
});

  //Update a specific User
  router.patch('/:userId', async (req,res) => {
    try{
      const updatedUser = await User.updateOne(
        {_id: req.params.userId}, 
        {$set:{username: req.body.username, password: req.body.password}}
        );
      res.json(updatedUser);
    }  catch(err){
      res.json({ message: err });
    }
  });
  
  //Delete a specific user
  router.delete('/delete/:userId', async (req, res) => {
    try{
      const removedUser = await User.remove({_id: req.params.userId})
      res.json(removedUser);
    } catch (err){
      res.json({message: err});
    }
  })
  
  module.exports = router