import path from 'path';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import User from './models/User.js';
import { dirname } from './lib/pathHelpers.js';

dotenv.config();

const connectionString = process.env.MONGO_URL;
const APIKEY = process.env.REACT_APP_APIKEY;
const __dirname = dirname(import.meta.url);
const server = express();
server.use(cors());
server.use(express.json());

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndMofidy: false,
});

server.get('/users', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((error) => {
      console.error(error.message);
    });
});

server.get('/users/:userId', (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
    .then((user) => res.json(user))
    .catch((error) => {
      console.error(error.message);
    });
});

server.post('/users', (req, res) => {
  const newUser = req.body;
  User.create(newUser)
    .then((data) => res.json(data))
    .catch((error) => {
      console.error(error.message);
    });
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
    });
});

server.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete({ _id: id }).then((data) => res.json(data));
});

server.get('/trending', (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${APIKEY}&language=en-US`
    )
    .then((res) => res.data)
    .then((movie) => res.status(200).send(movie))
    .catch((error) => {
      console.error(error.message);
    });
});

server.get('/netflix', (req, res) => {
  const queryParams = req.query;
  axios
    .get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${APIKEY}&with_networks=213`,
      {
        params: {
          query: queryParams.query,
          include_adult: queryParams.include_adult,
          page: queryParams.page,
        },
      }
    )
    .then((res) => res.data)
    .then((movie) => res.status(200).send(movie))
    .catch((error) => {
      console.error(error.message);
    });
});

server.get('/toprated', (req, res) => {
  const queryParams = req.query;
  axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US`,
      {
        params: {
          query: queryParams.query,
          include_adult: queryParams.include_adult,
          page: queryParams.page,
        },
      }
    )
    .then((res) => res.data)
    .then((movie) => res.status(200).send(movie))
    .catch((error) => {
      console.error(error.message);
    });
});

server.get('/action', (req, res) => {
  const queryParams = req.query;
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=28`,
      {
        params: {
          query: queryParams.query,
          include_adult: queryParams.include_adult,
          page: queryParams.page,
        },
      }
    )
    .then((res) => res.data)
    .then((movie) => res.status(200).send(movie))
    .catch((error) => {
      console.error(error.message);
    });
});

server.get('/adventure', (req, res) => {
  const queryParams = req.query;
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=12`,
      {
        params: {
          query: queryParams.query,
          include_adult: queryParams.include_adult,
          page: queryParams.page,
        },
      }
    )
    .then((res) => res.data)
    .then((movie) => res.status(200).send(movie))
    .catch((error) => {
      console.error(error.message);
    });
});

server.get('/comedy', (req, res) => {
  const queryParams = req.query;
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=35`,
      {
        params: {
          query: queryParams.query,
          include_adult: queryParams.include_adult,
          page: queryParams.page,
        },
      }
    )
    .then((res) => res.data)
    .then((movie) => res.status(200).send(movie))
    .catch((error) => {
      console.error(error.message);
    });
});

server.get('/crimemovies', (req, res) => {
  const queryParams = req.query;
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=80`,
      {
        params: {
          query: queryParams.query,
          include_adult: queryParams.include_adult,
          page: queryParams.page,
        },
      }
    )
    .then((res) => res.data)
    .then((movie) => res.status(200).send(movie))
    .catch((error) => {
      console.error(error.message);
    });
});

server.get('/documentaries', (req, res) => {
  const queryParams = req.query;
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=99`,
      {
        params: {
          query: queryParams.query,
          include_adult: queryParams.include_adult,
          page: queryParams.page,
        },
      }
    )
    .then((res) => res.data)
    .then((movie) => res.status(200).send(movie))
    .catch((error) => {
      console.error(error.message);
    });
});

server.get('/dramas', (req, res) => {
  const queryParams = req.query;
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=18`,
      {
        params: {
          query: queryParams.query,
          include_adult: queryParams.include_adult,
          page: queryParams.page,
        },
      }
    )
    .then((res) => res.data)
    .then((movie) => res.status(200).send(movie))
    .catch((error) => {
      console.error(error.message);
    });
});

server.get('/fantasy', (req, res) => {
  const queryParams = req.query;
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=14`,
      {
        params: {
          query: queryParams.query,
          include_adult: queryParams.include_adult,
          page: queryParams.page,
        },
      }
    )
    .then((res) => res.data)
    .then((movie) => res.status(200).send(movie))
    .catch((error) => {
      console.error(error.message);
    });
});

server.get('/horror', (req, res) => {
  const queryParams = req.query;
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=27`,
      {
        params: {
          query: queryParams.query,
          include_adult: queryParams.include_adult,
          page: queryParams.page,
        },
      }
    )
    .then((res) => res.data)
    .then((movie) => res.status(200).send(movie))
    .catch((error) => {
      console.error(error.message);
    });
});

server.get('/music', (req, res) => {
  const queryParams = req.query;
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=10402`,
      {
        params: {
          query: queryParams.query,
          include_adult: queryParams.include_adult,
          page: queryParams.page,
        },
      }
    )
    .then((res) => res.data)
    .then((movie) => res.status(200).send(movie))
    .catch((error) => {
      console.error(error.message);
    });
});

server.get('/sciencefiction', (req, res) => {
  const queryParams = req.query;
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=878`,
      {
        params: {
          query: queryParams.query,
          include_adult: queryParams.include_adult,
          page: queryParams.page,
        },
      }
    )
    .then((res) => res.data)
    .then((movie) => res.status(200).send(movie))
    .catch((error) => {
      console.error(error.message);
    });
});

server.get('/thriller', (req, res) => {
  const queryParams = req.query;
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=53`,
      {
        params: {
          query: queryParams.query,
          include_adult: queryParams.include_adult,
          page: queryParams.page,
        },
      }
    )
    .then((res) => res.data)
    .then((movie) => res.status(200).send(movie))
    .catch((error) => {
      console.error(error.message);
    });
});

server.get('/searchmovies', (req, res) => {
  const queryParams = req.query;

  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=`,
      {
        params: {
          query: queryParams.query,
          include_adult: queryParams.include_adult,
          page: queryParams.page,
        },
      }
    )
    .then((res) => res.data)
    .then((movie) => res.status(200).send(movie))
    .catch((error) => {
      console.error(error.message);
    });
});

server.get('/searchshows', (req, res) => {
  const queryParams = req.query;

  axios
    .get(
      `https://api.themoviedb.org/3/search/tv?api_key=${APIKEY}&language=en-US`,
      {
        params: {
          query: queryParams.query,
          include_adult: queryParams.include_adult,
          page: queryParams.page,
        },
      }
    )
    .then((res) => res.data)
    .then((movie) => res.status(200).send(movie))
    .catch((error) => {
      console.error(error.message);
    });
});

server.use(express.static(path.join(__dirname, '../../client/build')));

server.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`Server listens on port ${port}.`));
