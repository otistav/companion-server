import express from 'express';
import connect from './db/index';
import User from './db/models/User';
import authRouter from './routes/auth';

require('dotenv').config();

const { API_VERSION } = process.env;
const API = `/api/v${API_VERSION}`;
(async () => {
  await connect();

  const app = express();
  app.get('/', async (req: any, res: any) => {
    const user = new User({ username: 'ff', password: 'fjdkf', email: 'fjcj' });
    await user.save();
    res.send(user);
  });
  app.use(`${API}/auth`, authRouter);

  app.listen(3000, () => {
    console.log('app is running');
  });
})();
