const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Connection URL
const dbName = 'geodata'; // Add your database name here
const url = 'mongodb+srv://hackers_co:K9mDEAed8NYtQeLd@blog.xk7q6yw.mongodb.net/geodata';

const client = new MongoClient(url);
const db = client.db(dbName);


app.get('/save-location', (req, res) => {
  const { latitude, longitude } = req.query;
  const currentDateTimeIST = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
 

client.connect()
  .then(() => {
    console.log('MongoDB connection successful');

      const db = client.db(dbName);
      const collection = db.collection('info');
      collection.insertOne(
        {
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          Date: currentDateTimeIST,
          // ipAddress: clientIP,
        })
    
    });
    
  })
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
