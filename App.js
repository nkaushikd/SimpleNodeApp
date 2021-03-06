const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = require('./data.json');
const data2 = require('./data-2.json');

app.get('/', (req, res) => {
  res.send(data);
})

app.get('/horizontal', (req, res) => {
  res.send(data2);
})

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})