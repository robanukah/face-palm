import {getPosts, createPost} from './postRoutes';

export const router = (app, db) => {
    getPosts(app, db);
    createPost(app, db);
};
