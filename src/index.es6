import express from 'express';
import MongoClient from 'mongodb';

import {serverConfig} from './config';
import {mongo, server} from './constants';
import {router} from './routes';

const app = express();

MongoClient.connect(mongo.MONGODB_URL, (err, database) => {
  if (err) {
    console.log(err);
  }

  router(app, database);
});

serverConfig(app);

app.listen(server.PORT, () => {
  console.log('listening on ' + server.PORT);
});
