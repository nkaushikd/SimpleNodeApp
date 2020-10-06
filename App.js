const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = require('./data.json');

app.get('/', (req, res) => {
  res.send(data);
})

app.listen(port, () => {
  console.log(`Listening on ${port}`);
})