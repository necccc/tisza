const crypto = require('crypto');
const errors = require('restify-errors');
const { TITO_TOKEN } = process.env

module.exports = (request, response, next) => {
  const signature = request.headers['tito-signature']

  const hmac = crypto
    .createHmac('sha256', TITO_TOKEN)
    .update(JSON.stringify(request.body))
    .digest('base64')

  if (signature !== hmac) {
    // next(new errors.UnauthorizedError('invalid token'))
    console.warn('Tito signature STILL CANNOT BE VERIFIED')
  }

  return next(null)
}
