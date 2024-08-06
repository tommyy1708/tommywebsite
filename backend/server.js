const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const topicRoutes = require('./routes/topics');
const contentRoutes = require('./routes/content');
const commentRoutes = require('./routes/comments');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
});

const app = express();
const PORT = process.env.PORT || 5000;



// Middleware
app.use(cors());
app.use(express.json());


// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });



// Routes
app.use('/api/topics', topicRoutes);
app.use('/api/contents', contentRoutes);
app.use('/api/comments', commentRoutes);




// Define a simple route
app.get('/api/test', (req, res) => {
  res.send('Hello World!');
});

