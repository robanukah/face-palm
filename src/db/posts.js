import {POSTS_COLLECTION} from '../constants/mongo';

const fetchAll = (db, res) => {
    db
        .collection(POSTS_COLLECTION)
        .find()
        .toArray((err, result) => {
            errToConsole(err);
            res.render('index.ejs', {posts: result});
        });
};

const create = (db, req, res) => {
    db
        .collection(POSTS_COLLECTION)
        .save(req.body, (err, result) => {
            errToConsole(err);
            res.redirect('/');
        });
};

const errToConsole = (err) => {
    if (err) {
        console.log(err);
    }
};

export {fetchAll, create};
