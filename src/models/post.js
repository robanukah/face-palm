import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    avatar: String,
    date: String,
    author: String,
});

export default mongoose.model('Post', PostSchema);
