
'use strict'
require('dotenv').config()

const { PORT = 8000 } = process.env

const restify = require('restify');
const validateTito = require('./middlewares/tito-validate')
const validateRequest = require('./middlewares/request-validate')

const handleRegistration = require('./handlers/register')

const server = restify.createServer();
server.use(restify.plugins.bodyParser())

server.post('/register-purchase/', validateRequest, validateTito, handleRegistration);
server.head('/register-purchase/', validateRequest, validateTito, handleRegistration);

server.listen(PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});
