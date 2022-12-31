const express = require('express');
const db = require('./model/db');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to my app!');
});

//middleware
router.get('/auth/:token', (req, res) => {
  //return jwt token
  res.send('List of users');
});

router.get('/users/:id', (req, res) => {
  res.send(`User with ID: ${req.params.id}`);
});

module.exports = router;