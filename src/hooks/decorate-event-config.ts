export default async (request, reply) => {
  const event = request?.body?.event?.slug ?? null;


  console.log(request.eventsConfigList)
  if (event == null || typeof request.eventsConfigList[event] == 'undefined') {
    reply.badRequest()
    return
  }

  request.eventConfig = request.eventsConfigList[event]

  return
};
