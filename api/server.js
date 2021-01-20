const express = require('express');

const usersRouter = require('./users/users-router');
const postsRouter = require('./posts/posts-router');

const helmet = require('helmet');

const server = express();


server.use(express.json());
server.use(helmet());

server.use(logger);

server.use('/api/users', usersRouter);
server.use('/api/posts', postsRouter);


// remember express by default cannot parse JSON in request bodies

// global middlewares and routes need to be connected here

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

function logger(req, res, next) {
  const date = new Date()
  console.log(`${req.method}, ${req.url}, ${res.statusCode}, ${date}`);
  next();
};


module.exports = server;
