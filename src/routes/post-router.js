import express from 'express';

import {createPost, deletePost, fetchPost, fetchPosts, updatePost} from '../db/post';

const router = new express.Router();

export const postRouter = () => {
    router
        .route('/posts')
        .get((req, res) => fetchPosts(res))
        .post((req, res) => createPost(req, res));

    router
        .route('/posts/:post_id')
        .get((req, res) => fetchPost(req, res))
        .put((req, res) => updatePost(req, res))
        .delete((req, res) => deletePost(req, res));

    return router;
};
