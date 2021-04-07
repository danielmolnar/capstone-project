// import { saveToDb } from '../lib/databaseHelpers.js';
// import Favorites from '../models/Favorites.model.js';

// const getFavorites = async (req, res) => {
//   const userId = req.params.userId;
//   try {
//     const userFavorites = await Favorites.findOne({ userId }).populate(
//       'favorites'
//     );

//     res.json(userFavorites);
//   } catch (error) {
//     res.json(error);
//   }
// };

// const postFavorites = async (req, res) => {
//   const userId = req.params.userId;
//   const movieId = req.body.movieId;
//   const userFavorites = await Favorites.findByIdAndDelete({ userId });

//   if (userFavorites) {
//     const isFavorite = userFavorites.favorites.some((id) => id == movieId);
//     if (isFavorite) {
//       const updatedFavorites = userFavorites.favorites.filter(
//         (id) => id != movieId
//       );
//       const newList = await Favorites.updateOne(
//         { customerId },
//         { $set: { favorites: updatedFavorites } }
//       );
//       res.json(newList);
//     } else {
//       userFavorites.favorites.push(movieId);
//       try {
//         const updatedList = await Favorites.updateOne(
//           { userId },
//           { $set: { favorites: userFavorites.favorites } }
//         );
//         res.json(updatedList);
//       } catch (error) {
//         res.json(error);
//       }
//     }
//   } else {
//     try {
//       const newFavorites = new Favorites({ userId, favorites: [movie.Id] });
//       const favorites = await saveToDb(newFavorites, 'favorites');
//       res.json(favorites);
//     } catch (error) {
//       res.json(error);
//     }
//   }
// };

// const deleteFavoriteList = async (res, req) => {
//   const userId = req.params.userId;
//   try {
//     const result = await Favorites.deleteOne({ userId });
//     res.json(result);
//   } catch (error) {
//     res.json(error);
//   }
// };

// export { getFavorites, postFavorites, deleteFavoriteList };
