import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';

const connectionString = 'mongodb://localhost:27017/';
const databaseName = 'flix-buddies';

const mongoClient = mongodb.MongoClient;

const server = express();
server.use(bodyParser.json());

server.get('/', (request, response) => {
  response.json({ status: 'Server is running...' });
});

server.get('/users', (request, response) => {
  mongoClient.connect(connectionString, async (error, client) => {
    const db = client.db(databaseName);
    const users = await db.collection('users').find().toArray();
    response.json(users);
  });
});

server.post('/users', (request, response) => {
  const user = {
    name: request.body.name,
    tags: request.body.tags,
    about: request.body.about,
    favorites: request.body.favorites,
  };
  mongoClient.connect(connectionString, (error, client) => {
    const db = client.db(databaseName);
    db.collection('flix-buddies')
      .insertOne(user)
      .then((result) => response.json(result.ops[o]));
  });
});

server.listen(4000, () => console.log('Server started'));
