const express = require('express');
const payment = require('./payment.js')
const router = express.Router();

  router.get('/', (req, res) => {
    res.send('I\'m the main page!')
  })
  
  router.use('/payment', payment);
  
module.exports = router;