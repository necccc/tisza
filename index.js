
'use strict'
require('dotenv').config()

const { PORT = 8000 } = process.env

const restify = require('restify');
const validateTito = require('./middlewares/tito-validate')
const validateRequest = require('./middlewares/request-validate')

const server = restify.createServer();

server.post('/register-purchase/', validateRequest, validateTito, function (req, res) {
  console.log(req.body);

  res.send('ok')
});
server.head('/register-purchase/', validateRequest, validateTito, function (req, res) {
  console.log(req.body);

  res.send('ok')
});

server.use(restify.plugins.bodyParser())

server.listen(PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});
