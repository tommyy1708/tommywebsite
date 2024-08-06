const express = require('express');
const router = express.Router();
const Topic = require('../models/Topic');

// Create a new topic
router.post('/', async (req, res) => {
  try {
    const topic = new Topic(req.body);
    await topic.save();
    res.status(201).send(topic);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all topics
router.get('/', async (req, res) => {
  try {
    const topics = await Topic.find();
    res.status(200).send(topics);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
