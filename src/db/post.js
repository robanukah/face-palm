import Post from '../domain/post';

export const fetchPosts = (res) => {
    Post.find({}, (err, posts) => {
        sendErr(err);
        res.json(posts);
    });
};

export const fetchPost = (req, res) => {
    Post.findById(req.params.post_id, (err, post) => {
        sendErr(err);
        res.json(post);
    });
};

export const createPost = (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        description: req.body.description,
        avatar: req.body.avatar,
        date: req.body.date,
        author: req.body.author,
    });

    post.save((err) => {
        sendErr(err);
        res.json({message: 'Post created', data: post});
    });
};

export const updatePost = (req, res) => {
    Post.findByIdAndUpdate(req.params.post_id, req.body, (err, post) => {
        sendErr(err, res);
        res.json({message: 'Post updated', data: post});
    });
};

export const deletePost = (req, res) => {
    Post.findByIdAndRemove(req.params.post_id, (err) => {
        sendErr(err);
        res.json({message: 'Post deleted'});
    });
};

const sendErr = (err, res) => {
    if (err) {
        res.send(err);
    }
};
