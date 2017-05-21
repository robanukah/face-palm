import {POSTS_COLLECTION} from '../constants/mongo';

export const getPosts = (app, db) => {
    app.get('/', (req, res) => {
        db
            .collection(POSTS_COLLECTION)
            .find()
            .toArray((err, result) => {
                errToConsole(err);
                res.render('index.ejs', {posts: result});
            });
    });
};

export const createPost = (app, db) => {
    app.post('/posts', (req, res) => {
        db
            .collection(POSTS_COLLECTION)
            .save(req.body, (err, result) => {
                errToConsole(err);
                res.redirect('/');
            });
    });
};

const errToConsole = (err) => {
    if (err) {
        console.log(err);
    }
};
