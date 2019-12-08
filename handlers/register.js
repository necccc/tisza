const axios = require('axios')
const getBuyer = require('../lib/get-buyer')
const getSeller = require('../lib/get-seller')
const getInvoiceItems = require('../lib/get-invoice-items')
const createInvoice = require('../lib/create-invoice')
const eventConfig = require('../events.config')

module.exports = async (req, res) => {
  const {
    event: {
      account_slug,
      slug: event_slug
    },
    slug: registration_slug
  } = req.body
  const event = eventConfig[event_slug]

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
      comment: `Conference date: ${event.date}.\n The invoice includes mediated services.`,
      orderNumber: order.reference,
      buyer,
      seller,
      items
    })

    res.send(result.invoiceId)
  } catch (e) {
    console.log(e);

    res.send('Error')
  }

}
