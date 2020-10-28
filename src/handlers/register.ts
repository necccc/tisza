import getTitoOrder from '../tito/get-order';
import createClient from '../szamlazzhu/create-client';
import sendInvoice from '../szamlazzhu/send-invoice';
import createInvoice from '../invoice/create';
import errorHandler from '../error-handler';

export default async (request, reply) => {
  const {
    receipt: {
      payment_provider,
    },
    event: {
      account_slug: account,
      slug: event,
    },
    slug: registration,
  } = request.body;

  if (!payment_provider) {
    reply.send('No payment, no invoice');
    return;
  }

  try {
    const order = await getTitoOrder(account, event, registration, process.env.TITO_API_TOKEN);
    const invoice = await createInvoice(order, request.eventConfig);

    if (process.env.NODE_ENV === 'production') {
      const result = await sendInvoice(
         invoice,
         createClient(request.eventConfig)
      );
      reply.send(result);
    } else {
      reply.send(JSON.stringify(invoice));
    }
  } catch (error) {
    await errorHandler('ERROR: Invoice creation failed', error, request);
    reply.internalServerError('Invoice creation failed');
  }
};
