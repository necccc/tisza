/* eslint-disable no-process-exit, require-await */
'use strict';
import dotenv from 'dotenv';

dotenv.config();

const { PORT = 8000 } = process.env;

const fastify = require('fastify')({
  logger: true,
});

fastify.get('/', async () => ({ hello: 'world' }));

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
/*
 *const validateTito = require('./middlewares/tito-validate')
 *const validateRequest = require('./middlewares/request-validate')
 *
 *const handleRegistration = require('./handlers/register')
 *
 *const server = restify.createServer();
 *server.use(restify.plugins.bodyParser())
 *
 *server.post('/register-purchase/', validateRequest, validateTito,   );
 *server.head('/register-purchase/', validateRequest, validateTito, handleRegistration);
 */
