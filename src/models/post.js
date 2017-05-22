import mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
    title: String,
});

export default mongoose.model('Post', PostSchema);
