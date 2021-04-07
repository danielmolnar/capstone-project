import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/User.js';
import dotenv from 'dotenv';

dotenv.config();
const server = express();
server.use(cors());
server.use(express.json());

const connectionString = 'mongodb://localhost:27017';
// const connectionString = process.env.mongourl

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndMofidy: false,
});

server.get('/', (req, res) => {
  res.json({ status: 'Server is up and running.' });
});

server.get('/users', (req, res) => {
  User.find().then((users) => res.json(users));
});

server.get('/users/:userId', (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
    .then((user) => res.json(user))
    .catch((error) => res.json({ error: 'User not found' }));
});

server.post('/users', (req, res) => {
  const newUser = req.body;
  User.create(newUser)
    .then((data) => res.json(data))
    .catch((error) => console.log(error));
});

server.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  User.findByIdAndUpdate({ _id: id }, updatedUser, {
    new: true,
  })

    .then((user) => res.json(user))
    .catch((error) => {
      console.error(error.message);
      res.send('An error occured');
    });
});

server.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete({ _id: id }).then((data) => res.json(data));
});

const port = 4000;
server.listen(port, () => console.log(`Server listens on port ${port}.`));
