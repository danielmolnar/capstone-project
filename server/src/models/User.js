import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tags: { type: Array, required: false },
  about: { type: String, required: false },
  age: { type: String, required: false },
  favorites: { type: Object, required: false },
  friendsNumber: { type: Number, required: false },
  watchlistNumber: { type: Number, required: false },
  favoritesNumber: { type: Number, required: false },
});

export default mongoose.model('User', userSchema);
