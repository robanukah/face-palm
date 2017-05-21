import express from 'express';
import bodyParser from 'body-parser';

export const server = (app) => {
    app.set('view engine', 'ejs');
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(express.static('views'));
};
