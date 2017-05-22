import Post from '../models/post';

export const fetchPosts = (res) => {
    Post.find({}, (err, posts) => {
        if (err) {
            res.send(err);
        }
        res.json(posts);
    });
};

export const fetchPost = (req, res) => {
    Post.findById(req.params.post_id, (err, post) => {
        if (err) {
            res.send(err);
        }
        res.json(post);
    });
};

export const createPost = (req, res) => {
    let post = new Post();
    post.title = req.body.title;
    post.content = req.body.content;

    post.save((err) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Post created!'});
    });
};
