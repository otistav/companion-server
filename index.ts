import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
  res.send('hello world');
});

app.listen(3000, () => {
  console.log('app is running');
});
