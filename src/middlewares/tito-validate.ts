/* eslint-disable no-useless-concat */
import crypto from 'crypto';
import eventsConfig from '../../events.config';

export default (request, response, next) => {
  const signature = request.headers['tito-signature'];
  const event = request.body.event.slug;

  const data = JSON.stringify(request.body)
    .replace(/</g, '\\' + 'u003c')
    .replace(/>/g, '\\' + 'u003e')
    .replace(/&/g, '\\' + 'u0026')
    .replace(/\r/g, '\\' + 'r')
    .replace(/\n/g, '\\' + 'n');

  const hmac = crypto
    .createHmac('sha256', eventsConfig[event].titoToken)
    .update(data)
    .digest('base64');

  if (signature !== hmac) {
    // next(new errors.UnauthorizedError('invalid token'))
    console.warn(`Tito signature STILL CANNOT BE VERIFIED "${signature}"`);
  }

  return next(null);
};
