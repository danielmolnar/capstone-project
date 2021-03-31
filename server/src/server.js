import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.routes.js';

// const result = dotenv.config();
const server = express();
server.use(cors());
server.use(express.json());
const DB_NAME = process.env.DB_NAME;

const connectionString = 'mongodb://localhost:27017/';
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndMofidy: false,
});

server.get('/api', (req, res) => {
  res.json({ status: 'Server is up and running.' });
});

server.use('/api', [userRoutes]);

const port = 4000;
server.listen(port, () => console.log(`Server listens on port ${port}.`));
