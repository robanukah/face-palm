import {
    fetchPosts,
    fetchPost,
    createPost,
    updatePost,
} from '../db/post';

export const postRouter = (router) => {
    router
        .route('/posts')
        .get((req, res) => fetchPosts(res))
        .post((req, res) => createPost(req, res));

    router
        .route('/posts/:post_id')
        .get((req, res) => fetchPost(req, res))
        .put((req, res) => updatePost(req, res));
};
