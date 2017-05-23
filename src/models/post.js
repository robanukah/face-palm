import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: String,
    author: String,
});

export default mongoose.model('Post', PostSchema);
