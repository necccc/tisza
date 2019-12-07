const errors = require('restify-errors');
const { APP_TOKEN } = process.env

module.exports = (request, response, next) => {
  const urlObj = new URL(request.url, 'http://0.0.0.0/');
  const token = urlObj.searchParams.get('token')

  if (!token) {
    return next(new errors.UnauthorizedError('missing token'))
  }

  if (token !== APP_TOKEN) {
    throw next(new errors.UnauthorizedError('invalid token'))
  }

  next()
}
