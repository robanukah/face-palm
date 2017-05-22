import express from 'express';
import mongoose from 'mongoose';

import {expressConfig} from './config/express';
import {Post} from './models/post';
import {PORT} from './constants/server';
import {MONGODB_URL} from './constants/mongo';

const app = express();
const router = new express.Router();

// connect to db
mongoose.connect(MONGODB_URL);

// configure app to use bodyParser()
expressConfig(app);

router
  .route('/posts')
  .get((req, res) => {
    Post.find((err, posts) => {
      if (err) {
        res.send(err);
      }
      res.json(posts);
    });
  });

router
  .route('/posts/:post_id')
  .get((req, res) => {
    Post.findById(req.params.post_id, (err, posts) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  });

// register all routes
app.use('/api', router);

// start server
app.listen(PORT, () => {
  console.log('listening on ' + PORT);
});
