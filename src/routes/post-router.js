import {fetchPosts, fetchPost, createPost} from '../db/post-middleware';

export const postRouter = (router) => {
    router
        .route('/posts')
        .get((req, res) => fetchPosts(res))
        .post((req, res) => createPost(req, res));

    router
        .route('/posts/:post_id')
        .get((req, res) => fetchPost(req, res));
};
