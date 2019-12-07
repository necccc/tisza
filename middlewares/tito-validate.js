const crypto = require('crypto');
const errors = require('restify-errors');
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
    TITO_TOKEN,
    body: JSON.stringify(request.body),
  });

  if (signature !== hmac) {
    next(new errors.UnauthorizedError('invalid token'))
  }

  return next(null)
}
