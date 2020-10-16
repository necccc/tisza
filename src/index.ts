/* eslint-disable no-process-exit, require-await */
'use strict';
import fastify from 'fastify';
import sensible from 'fastify-sensible'
import helmet from 'fastify-helmet'
import rawBody from 'fastify-raw-body'

import validateRequest from './hooks/validate-request'
import validateTitoPayload from './hooks/validate-tito-payload'
import decorateEventConfig from './hooks/decorate-event-config'
import register from './handlers/register'

const { PORT = 8000 } = process.env;

const server = fastify({
  logger: true,
});

server.register(sensible)
server.register(helmet)
server.register(rawBody, {
  global: false,
  runFirst: true
})

server.decorateRequest('eventConfig', {})

server.addSchema({
  $id: 'titoSchema',
  type: 'object',
  required: [ 'token', 'tito-signature' ],
  properties: {
    token: { type: 'string' },
    'tito-signature': { type: 'string' }
  }
})

server.addHook('preHandler', async (request, reply) => {
  //console.log('pre-handling', request)

  console.log(request)

  return
})

server.route({
  method: 'POST',
  url: '/register-purchase',
  config: {
    rawBody: true
  },
  schema: {
    querystring: {
      type: 'object',
      required: [ 'token' ],
      properties: {
        token: { type: 'string' },
      }
    },
    headers: {
      type: 'object',
      required: ['tito-signature' ],
      properties: {
        'tito-signature': { type: 'string' }
      }
    },
  },
  preHandler: async (request, reply) => {
    await decorateEventConfig(request, reply)
    await validateRequest(request, reply)
    await validateTitoPayload(request, reply)
  },
  handler: register
});

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
