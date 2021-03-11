const express = require('express')
const router = express.Router()
const Journal = require('../models/journal.model');

//routes

//get all of a user's journals
router.post('/fetch', async (req, res) => {
  try{
    const journal = await Journal.find({userId : req.body.userId}, 'content -_id');
    console.log('abc');
    res.json(journal);
  } catch (err) {
    console.log("failed");
    res.json({message: err})
  }
})

//post a journal
router.post('/add', async (req, res) => {
  const journal = new Journal({  
    userId: req.body.userId,
    content: req.body.content
  });
  try{
   const savedJournal = await journal.save();
    res.json(savedJournal);
  } catch(err){
    res.json({ message: err });
  }
});

//Update a User's Journal
router.post('/update', async(req, res) => {
  try{
    const updatedJournal = await Journal.where({_Id: req.body._Id}).updateOne({$set: {content: req.body.content}});
    res.json(updatedJournal);
  }catch(err){
    console.log('failed');
    res.json({ message:err });
  }
});

//Delete a User's journals
router.post('/delete', async(req, res) => {
  try{
    const deletedJournal = await Journal.remove({_Id: req.body._Id});
    res.json(deletedJournal);
  }catch (err){
    res.json({message: err});
  }
})

module.exports = router
