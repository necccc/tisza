const crypto = require('crypto');
const boom = require('boom');

const { TITO_TOKEN } = process.env

module.exports = (request, response, next) => {

  console.log(request.headers);

  const signature = request.headers['tito-signature']
	const hmac = crypto.createHmac('sha256', TITO_TOKEN);
	hmac.update(JSON.stringify(request.body));

  const pass = (signature === hmac.digest('base64'))

  if (!pass) {
    throw boom.unauthorized('invalid token')
  }

  return next(null)
}
