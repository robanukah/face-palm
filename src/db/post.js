import Post from '../domain/post';

export const fetchPosts = (res) => {
    Post.find({}, (err, posts) => send(res, posts, err));
};

export const fetchPost = (req, res) => {
    Post.findById(req.params.post_id, (err, post) => send(res, post, err));
};

export const createPost = (req, res) => {
    let post = new Post();
    mapDtoToDomain(post, req);

    post.save((err) => send(res, {message: 'Post created!'}, err));
};

export const updatePost = (req, res) => {
    Post.findById(req.params.post_id, (err, post) => {
        sendErr(err, res);
        mapDtoToDomain(post, req);

        post.save((err) => send(res, {message: 'Post updated!'}, err));
    });
};

// not pure, fuck you
const mapDtoToDomain = (post, req) => {
    post.title = req.body.title;
    post.content = req.body.content;
    post.description = req.body.description;
    post.avatar = req.body.avatar;
    post.date = req.body.date;
    post.author = req.body.author;
};

const sendErr = (err, res) => {
    if (err) {
        res.send(err);
    }
};

const send = (res, obj, err) => {
    sendErr(err, res);
    res.json(obj);
};
