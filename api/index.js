const express = require('express');
const retailers = require('./data/retailers.json');

/**
 * Initialize express
 */
const app = express();

/**
 * Fetch Retailers
 *
 * GET: /api/retailers
 */
app.get('/api/retailers', async (req, res) => {
  //give a delay of 2.5 seconds to simulate a slow network
  //this is only for demo purposes to show the loading skeletons
  setTimeout(() => {
    res.json(retailers);
  }, 2500);
});

/**
 * Fetch Single Retailer
 *
 * GET: /api/retailer/:id
 */
app.get('/api/retailer/:id', async (req, res) => {
  const id = parseInt(req.params.id);

  const retailer = retailers.find(r => r.id === id);

  res.json(retailer);
});

/**
 * Start the express server and listen
 */
app.listen(3000, () => console.log('Server started -> http://localhost:3000'));
