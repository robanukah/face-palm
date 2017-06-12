import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import {postRouter} from './routes/post-router';

const app = express();
const router = postRouter();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017');

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

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// register all routes
app.use('/api', router);

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('listening on ' + PORT);
});
