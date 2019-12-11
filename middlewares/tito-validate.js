const crypto = require('crypto');
const errors = require('restify-errors');
const { TITO_TOKEN } = process.env

module.exports = (request, response, next) => {
  const signature = request.headers['tito-signature']
  const data = JSON.stringify(request.body)
    .replace(/</g, '\\' + 'u003c')
    .replace(/>/g, '\\' + 'u003e')
    .replace(/&/g, '\\' + 'u0026')
    .replace(/\r/g, '\\' + 'r')
    .replace(/\n/g, '\\' + 'n')

  const hmac = crypto
    .createHmac('sha256', TITO_TOKEN)
    .update(data)
    .digest('base64')

  if (signature !== hmac) {
    // next(new errors.UnauthorizedError('invalid token'))
    console.warn(`Tito signature STILL CANNOT BE VERIFIED "${signature}"`)
  }

  return next(null)
}
