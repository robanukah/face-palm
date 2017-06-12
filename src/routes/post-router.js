import express from 'express';

import {createPost, fetchPost, fetchPosts, updatePost} from '../db/post';

const router = new express.Router();

export const postRouter = () => {
    router
        .route('/posts')
        .get((req, res) => fetchPosts(res))
        .post((req, res) => createPost(req, res));

    router
        .route('/posts/:post_id')
        .get((req, res) => fetchPost(req, res))
        .put((req, res) => updatePost(req, res));

    return router;
};
