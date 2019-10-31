const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('익스프레스 안녕~');
});

app.listen(3005, () => {
  console.log('서버가 작동중이에요! http://localhost:3005');
});
