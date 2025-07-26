require('dotenv').config(); 
const express = require('express');
require('dotenv').config();

const app = require('./src/app'); 

app.get('/', (req, res) => {
  res.send('HellWorld!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
