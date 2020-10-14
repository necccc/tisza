const getBuyer = require('../lib/get-buyer');
const getSeller = require('../lib/get-seller');
const getInvoiceItems = require('../lib/get-invoice-items');


const eventConfig = require('../events.config');

import getTitoOrder from '../tito/get-order'
import createClient from '../szamlazzhu/create-client'
import sendInvoice from '../szamlazzhu/send-invoice';
import createInvoice from '../invoice/create'
import errorHandler from '../error-handler'

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

  const config = eventConfig[event];

  if (!payment_provider) {
    reply.send('No payment, no invoice');
    return;
  }

  try {
    const order = await getTitoOrder(account, event, registration, process.env.TITO_API_TOKEN)
    const invoice = await createInvoice(order, config)
    const result = await sendInvoice(
      invoice,
      createClient()
    );
    reply.send(result);
  } catch (error) {
    await errorHandler('ERROR: Invoice creation failed', error, request);
    reply.internalServerError('Invoice creation failed')
  }
};
