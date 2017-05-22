import bodyParser from 'body-parser';

export const expressConfig = (app) => {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
};
