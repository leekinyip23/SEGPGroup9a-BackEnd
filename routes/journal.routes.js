const express = require('express')
const router = express.Router()
const Journal = require('../models/journal.model');

//routes

//Get's all post
router.get('/', async (req, res) => {
  try {
    const journal = await Journal.find();
    res.json(journal);
  } catch (err) {
    res.json({message: err })
  }
});

//Get a Specific post
router.get('/:journalId', async (req,res) => {
  try{
    const journal = await Journal.findById(req.params.journalId);
    res.json(journal);
  } catch (err) {
    res.json({message: err})
  }
});

//post a journal
router.post('/add', async (req, res) => {
  const journal = new Journal({
    UserId: req.body.userId,
    content: req.body.content
  });
  try{
   const savedJournal = await journal.save();
    res.json(savedJournal);
  } catch(err){
    res.json({ message: err });
  }
});

//Update a specific Journal
router.patch('/update/:journalId', async (req,res) => {
  try{
    const updatedJournal = await Journal.updateOne(
      {_id: req.params.journalId}, 
      {$set:{content: req.body.content}}
      );
    res.json(updatedJournal);
  }  catch(err){
    res.json({ message: err });
  }
});

//Delete Journal
router.delete('/delete', async (req, res) => {
  try {
    const removedJournal = await Journal.remove({ _id: req.params.journalID });
    res.json(removedJournal);
  } catch (err) {
    res.json({ message: err});
  }
})

//Delete a specific post
router.delete('/delete/:journalId', async (req, res) => {
  try{
    const removedJournal = await Journal.remove({_id: req.params.journalId})
    res.json(removedJournal);
  } catch (err){
    res.json({message: err});
  }
})

module.exports = router