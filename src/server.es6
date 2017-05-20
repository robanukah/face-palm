import express from 'express';
import bodyParser from 'body-parser';
import MongoClient from 'mongodb';

const app = express();

const MONGODB_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/quotes';

let db;

MongoClient.connect(MONGODB_URL, (err, database) => {
  errToConsole(err);
  db = database;
});

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('views'));
app.set('view engine', 'ejs');

app.listen(app.get('port'));

app.get('/', (req, res) => {
  db
    .collection('quotes')
    .find()
    .toArray((err, result) => {
      errToConsole(err);
      res.render('index.ejs', {quotes: result});
    });
});

app.post('/quotes', (req, res) => {
  db
    .collection('quotes')
    .save(req.body, (err, result) => {
      errToConsole(err);
      res.redirect('/');
    });
});

const errToConsole = (err) => {
  if (err) {
    console.log(err);
  }
};
