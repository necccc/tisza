const axios = require('axios');
const getBuyer = require('../lib/get-buyer');
const getSeller = require('../lib/get-seller');
const getInvoiceItems = require('../lib/get-invoice-items');
const createInvoice = require('../lib/create-invoice');
const sendMail = require('../lib/send-mail');
const eventConfig = require('../events.config');
const createErrorMessage = require('../lib/create-error-email');

module.exports = async (req, res) => {
  const {
    receipt: {
      payment_provider,
    },
    event: {
      account_slug,
      slug: event_slug,
    },
    slug: registration_slug,
  } = req.body;

  const event = eventConfig[event_slug];

  if (!payment_provider) {
    res.send('No payment, no invoice');
    return;
  }

  try {
    const titoRequest = await axios.get(
      `https://api.tito.io/v3/${account_slug}/${event_slug}/registrations/${registration_slug}?view=extended`,
      {
        headers: {
          Authorization: `Token token=${process.env.TITO_API_TOKEN}`,
          Accept: 'application/json',
        },
      }
    );

    const order = titoRequest.data.registration;

    const result = await createInvoice({
      comment: `The invoice includes mediated services. \nPaid in full. \nThis document was issued electronically and is therefore valid without signature.`,
      orderNumber: order.reference,
      invoiceIdPrefix: event.invoiceIdPrefix,
      logoImage: event.logoImage,
      buyer: getBuyer(event, order),
      seller: getSeller(event, order),
      items: getInvoiceItems(event, order),
    });

    res.send(result);
  } catch (error) {
    await sendMail(
      'ERROR: Invoice creation failed',
      createErrorMessage(req.body, error)
    );
    console.log(error);

    res.send('Error');
  }
};
