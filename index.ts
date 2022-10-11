import express from 'express';
import bodyParser from 'body-parser';
import connect from './db/index';
import authRouter from './routes/auth';

require('dotenv').config();

const { API_VERSION } = process.env;
const API = `/api/v${API_VERSION}`;
(async () => {
  await connect();

  const app = express();
  app.use(bodyParser.json());
  app.use(`${API}/auth`, authRouter);

  app.listen(3000, () => {
    console.log('app is running');
  });
})();
