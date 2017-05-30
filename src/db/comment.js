import Comment from '../models/comment';

// not pure, fuck you
const mapDtoToDomain = (comment, req) => {
    post.author = req.body.author;
    post.content = req.body.content;
    post.avatar = req.body.avatar;
    post.date = req.body.date;
};

const sendErr = (err, res) => {
    if (err) {
        res.send(err);
    }
};
