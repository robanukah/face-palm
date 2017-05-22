import {getPosts, createPost} from './post-routes';

export const router = (app, db) => {
    getPosts(app, db);
    createPost(app, db);
};
