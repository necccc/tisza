const axios = require('axios')
const getBuyer = require('../lib/get-buyer')
const getSeller = require('../lib/get-seller')
const getInvoiceItems = require('../lib/get-invoice-items')
const createInvoice = require('../lib/create-invoice')
const sendMail = require('../lib/send-mail')
const eventConfig = require('../events.config')

const createErrorMessage = (registration, error) => {
  const message = `
    Error:
      ${error.message}

    Event: ${registration.event.slug}
    Reference: ${registration.reference}
    Created at: ${registration.created_at}

    Billing info:
      ${registration.billing_address.company_name}
      ${registration.billing_address.vat_number}
      ${registration.billing_address.address}
      ${registration.billing_address.city}
      ${registration.billing_address.country_name}

    Total: ${registration.total}
  `

  return message
}

module.exports = async (req, res) => {
  const {
    receipt: {
      payment_provider,
    },
    event: {
      account_slug,
      slug: event_slug
    },
    slug: registration_slug
  } = req.body
  const event = eventConfig[event_slug]

  if (!payment_provider) {
    res.send('No payment, no invoice')
    return;
  }

  try {
    const titoRequest = await axios.get(
      `https://api.tito.io/v3/${account_slug}/${event_slug}/registrations/${registration_slug}?view=extended`,
      {
        headers: {
          Authorization: `Token token=${process.env.TITO_API_TOKEN}`,
          Accept: 'application/json',
        }
      }
    )

    const order = titoRequest.data.registration

    const seller = getSeller(event, order)
    const buyer = getBuyer(event, order)
    const items = getInvoiceItems(event, order)

    const result = await createInvoice({
      comment: `The invoice includes mediated services. \nThis document was issued electronically and is therefore valid without signature. \nPaid in full.`,
      orderNumber: order.reference,
      invoiceIdPrefix: event.invoiceIdPrefix,
      buyer,
      seller,
      items
    })

    //await sendMail('Incoice created!', createErrorMessage(req.body, { message: result.invoiceId }))

    res.send(result)
  } catch (error) {
    console.log(error);
    await sendMail('Incoice creation failed', createErrorMessage(req.body, error))

    res.send('Error')
  }
}
