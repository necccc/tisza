/* eslint-disable no-process-exit, require-await */
'use strict';
import fastify from 'fastify';
import sensible from 'fastify-sensible'
import helmet from 'fastify-helmet'
import rawBody from 'fastify-raw-body'

import validateRequest from './hooks/validate-request'
import validateTitoPayload from './hooks/validate-tito-payload'

const { PORT = 8000 } = process.env;

const server = fastify({
  logger: true,
});

server.register(sensible)
server.register(helmet)
server.register(rawBody)

server.addHook('preHandler', validateRequest)
server.addHook('preHandler', validateTitoPayload)
server.addHook('preHandler', async (request, reply) => {
  //console.log('pre-handling', request)

  console.log(request)

  return
})

server.post('/register-purchase/', async () => ({ hello: 'world' }));

const start = async () => {
  try {
    await server.listen(PORT);
  } catch (err) {
    server.log.error(err);
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
