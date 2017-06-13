import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    author: String,
    content: String,
    avatar: String,
    date: String,
});

export default mongoose.model('Post', CommentSchema);
