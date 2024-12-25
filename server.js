const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Define a simple route to verify the server is working
app.get('/', (req, res) => {
  res.send('Self-Governance App Backend is Running!');
});

// Example endpoint to get all proposals
app.get('/api/proposals', (req, res) => {
  // This would query the database or blockchain for proposals
  res.json({
    proposals: [
      { id: 1, title: 'Universal Healthcare', description: 'Implement a universal healthcare system.' },
      { id: 2, title: 'Clean Energy Act', description: 'Pass a national clean energy bill.' }
    ]
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

Explanation: This basic Express server handles API routes. Later, we’ll add routes for creating proposals, voting, and interacting with the blockchain.
