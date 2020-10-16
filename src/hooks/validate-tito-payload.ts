/* eslint-disable no-useless-concat */
import crypto from 'crypto';

export default async (request, reply) => {
  const signature = request.headers['tito-signature'];

  const hmac = crypto
    .createHmac('sha256', request.eventConfig.titoToken)
    .update(request.rawBody)
    .digest('base64');

    if (signature !== hmac) {
      //reply.notAcceptable()
      console.warn(`Tito signature STILL CANNOT BE VERIFIED "${signature}"`);
      console.log('hmac', hmac)
      console.log('raw body', request.rawBody)
    return
  }

  return
};
