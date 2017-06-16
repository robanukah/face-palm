import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import Promise from 'bluebird';

const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017');
mongoose.Promise = Promise;

mongoose
    .connection
    .on('open', () => {
        console.log('Mongoose is connected');
    });

mongoose
    .connection
    .on('connected', () => {
        console.log('Mongoose default connection opened to ');
    });

mongoose
    .connection
    .on('error', (err) => {
        console.log('Mongoose default connection error: '.concat(err));
    });

app.set('superSecret', 'someString');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api', require('./routes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('listening on ' + PORT);
});
