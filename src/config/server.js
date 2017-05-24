import bodyParser from 'body-parser';
import cors from 'cors';

export const expressConfig = (app) => {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(cors());
};
