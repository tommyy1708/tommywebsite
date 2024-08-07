const express = require('express');
const router = express.Router();
const Content = require('../models/Content');

// Create a new content
router.post('/', async (req, res) => {
  try {
    console.log('request received:', req.body);
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
    console.log('request received:', req.body);
    const contents = await Content.find().populate('topic');
    res.status(200).send(contents);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get content and comments by topic ID
router.get('/topic/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const content = await Content.findOne({ topic: id }).populate('topic');
    const comments = await Comment.find({ content: content._id });
    res.status(200).send({ content, comments });
  } catch (err) {
    res.status(400).send(err);
  }
});


module.exports = router;
