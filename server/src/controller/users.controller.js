// import { User } from '../models/User.model.js';
// import { findAll, findById, saveToDb } from '../lib/databaseHelpers.js';

// async function getUsers(_, res) {
//   try {
//     const user = await findAll(User);
//     res.json(user);
//   } catch (error) {
//     res.json(error);
//   }
// }

// async function getUser(req, res) {
//   const userId = req.params.userId;
//   try {
//     const user = await findById(User, userId);
//     res.json(user);
//   } catch (error) {
//     res.json(error);
//   }
// }

// async function postUser(req, res) {
//   const newUser = new User({
//     userId: req.body.userId,
//     name: req.body.name,
//     age: req.body.age,
//     tags: req.body.tags,
//     about: req.body.about,
//     favorites: req.body.favorites,
//   });
//   try {
//     const user = await saveToDb(newUser);
//     res.json(user);
//   } catch (error) {
//     res.json(error);
//   }
// }

// export { getUsers, postUser, getUser };
