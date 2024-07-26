const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;
const host = process.env.HOST || 'http://localhost';
const url = 'mongodb://localhost:27017'; // Replace with your MongoDB URI


// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(url)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const db = mongoose.connection;
db.on(
  'error',
  console.error.bind(console, 'MongoDB connection error:')
);

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const items = require('./routes/items');
app.use('/api/items', items);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
