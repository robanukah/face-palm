import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    admin: Boolean,
});

export default mongoose.model('User', UserSchema);
