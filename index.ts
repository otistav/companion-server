import express from 'express';
import connect from './db/index';
import User from './db/models/User';

require('dotenv').config();

console.log(process.env);

(async () => {
  await connect();

  const app = express();

  app.get('/', async (req, res, next) => {
    const user = new User({
      email: 'hfehdj',
      username: 'fcceb',
      password: 'fcbbb',
    });
    await user.save();
    res.send(user);
  });

  app.listen(3000, () => {
    console.log('app is running');
  });
})();
