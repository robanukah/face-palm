import express from 'express';
import mongoose from 'mongoose';

import {expressConfig} from './config/server';
import {mongoLogs} from './config/mongo';

import {postRouter} from './routes/post-router';

import {PORT} from './constants/server';
import {MONGODB_URL} from './constants/mongo';

const app = express();
const router = new express.Router();

// connect to db
mongoose.connect(MONGODB_URL);

// mongoose logs
mongoLogs(mongoose);

// configure app to use bodyParser()
expressConfig(app);

// post routes
postRouter(router);

// register all routes
app.use('/api', router);

// start server
app.listen(PORT, () => {
  console.log('listening on ' + PORT);
});
