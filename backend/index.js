const { MongoClient } = require('mongodb');

async function main() {
  const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB URI

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    // Add your database operations here
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
