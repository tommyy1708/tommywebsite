const express = require('express');
const router = express.Router();
const Content = require('../models/Content');

// Create a new content
router.post('/', async (req, res) => {
  try {
    const content = new Content(req.body);
    await content.save();
    res.status(201).send(content);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all contents
router.get('/', async (req, res) => {
  try {
    const contents = await Content.find().populate('topic');
    res.status(200).send(contents);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
