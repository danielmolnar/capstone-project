import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  age: { type: String, required: false },
  favorites: { type: Array, required: false },
  favoritesNumber: { type: Number, required: false },
  friendsNumber: { type: Number, required: false },
  name: { type: String, required: true },
  tags: { type: Array, required: false },
  watchlist: { type: Array, required: false },
  watchlistNumber: { type: Number, required: false },
});

export default mongoose.model('User', userSchema);
