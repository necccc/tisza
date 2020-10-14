/* eslint-disable no-useless-concat */
import crypto from 'crypto';
import eventsConfig from '../../events.config';

export default async (request, reply) => {
  const signature = request.headers['tito-signature'];
  const event = request?.body?.event?.slug ?? null;

  if (event == null) {
    reply.badRequest()
    return
  }

  const hmac = crypto
    .createHmac('sha256', eventsConfig[event].titoToken)
    .update(request.rawBody)
    .digest('base64');

  if (signature !== hmac) {
    reply.notAcceptable()
    console.warn(`Tito signature STILL CANNOT BE VERIFIED "${signature}"`);
    return
  }

  return
};
