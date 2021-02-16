const express = require('express')

const router = express.Router()

const journalController =   require('../controllers/journal.controller');

// Retrieve all journals
router.get('/', journalController.findAll);

// Create a new journal
router.post('/', journalController.create);

// Retrieve a single journal with id
router.get('/:id', journalController.findById);

// Update a journal with id
router.put('/:id', journalController.update);

// Delete a journal with id
router.delete('/:id', journalController.delete);
module.exports = router