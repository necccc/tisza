const crypto = require('crypto');
const boom = require('boom');

const { TITO_TOKEN } = process.env

module.exports = (request, response, next) => {
  const type = request.headers['x-webhook-name']
  const signature = request.headers['tito-signature']

  const hmac = crypto
    .createHmac('sha256', TITO_TOKEN)
    .update(JSON.stringify(request.body))
    .digest('base64')

  console.log({
    type,
    signature,
    hmac,
    TITO_TOKEN
  });

  const pass = (signature === hmac)

  if (!pass) {
    next(boom.unauthorized('invalid token'))
  }

  return next(null)
}
