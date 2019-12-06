const boom = require('boom');
const { APP_TOKEN } = process.env

module.exports = (request, response, next) => {

  if (!request.query || !request.query.token) {
    throw boom.unauthorized('missing token')
  }

  const { token } = request.query

  if (token !== APP_TOKEN) {
    throw boom.unauthorized('invalid token')
  }

  next()
}
