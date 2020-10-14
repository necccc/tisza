const { APP_TOKEN } = process.env;

export default async (request, reply) => {
  const {
    query: {
      token
    }
  } = request

  if (typeof token == 'undefined') {
    reply.badRequest()
    return
  }

  if (token !== APP_TOKEN) {
    reply.badRequest()
    return
  }

};
