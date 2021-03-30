import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const favoritesSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  favorites: [{ type: Schema.Types.ObjectId, ref: 'Favorites' }],
});

const Favorites = mongoose.model('Favorites', favoritesSchema);

export default Favorites;
