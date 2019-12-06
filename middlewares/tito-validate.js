const crypto = require('crypto');
const boom = require('boom');

const { TITO_TOKEN } = process.env

module.exports = (request, response, next) => {
  const signature = request.headers['tito-signature']
  const hmac = crypto.createHmac('sha256', TITO_TOKEN);

  console.log(TITO_TOKEN);

  console.log(typeof request.body);
  console.log(request.body);


	hmac.update(JSON.stringify(request.body));

  const pass = (signature === hmac.digest('base64'))

  if (!pass) {
    throw boom.unauthorized('invalid token')
  }

  return next(null)
}
