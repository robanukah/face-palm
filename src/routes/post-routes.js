import {fetchAll, create} from '../db/posts';

const getPosts = (app, db) => {
    app.get('/', (req, res) => {
        fetchAll(db, res);
    });
};

const createPost = (app, db) => {
    app.post('/posts', (req, res) => {
        create(db, req, res);
    });
};

export {getPosts, createPost};
