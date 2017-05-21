import express from 'express';
import bodyParser from 'body-parser';
import MongoClient from 'mongodb';
import {router} from './routes';
import {PORT, MONGODB_URL} from './config';

const app = express();

MongoClient.connect(MONGODB_URL, (err, database) => {
  if (err) {
    console.log(err);
  }

  router(app, database);
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('views'));

app.listen(PORT, () => {
  console.log('listening on ' + PORT);
});
