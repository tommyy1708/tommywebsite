const express = require('express');
const router = express.Router();
const Comments = require('../models/Comments');

// Create a new comment
router.post('/', async (req, res) => {
  try {
    const comment = new Comments(req.body);
    await comment.save();
    res.status(201).send(comment);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all comments
router.get('/', async (req, res) => {
  try {
    const comments = await Comments.find().populate('content');
    res.status(200).send(comments);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
