import express from 'express';
import MongoClient from 'mongodb';

import {expressConfig} from './config/server';
import {MONGODB_URL} from './constants/mongo';
import {PORT} from './constants/server';
import {router} from './routes';

const app = express();

MongoClient.connect(MONGODB_URL, (err, database) => {
  if (err) {
    console.log(err);
  }

  router(app, database);
});

expressConfig(app);

app.listen(PORT, () => {
  console.log('listening on ' + PORT);
});
