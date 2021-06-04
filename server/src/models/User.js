import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: false },
  time: { type: Date, default: Date.now },
  favorites: { type: Array, required: false },
  watchlist: { type: Array, required: false },
  favoritesNumber: { type: Number, required: false },
  friendsNumber: { type: Number, required: false },
  tags: { type: Array, required: false },
  watchlistNumber: { type: Number, required: false },
});

export default mongoose.model('User', userSchema);
