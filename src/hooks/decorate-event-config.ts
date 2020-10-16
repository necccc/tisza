import eventsConfig from '../../events.config';

export default async (request, reply) => {
  const event = request?.body?.event?.slug ?? null;

  if (event == null) {
    reply.badRequest()
    return
  }
  request.eventConfig = eventsConfig[event]

  return
};
