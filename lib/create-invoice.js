const szamlazz = require('szamlazz.js')
const sendMail = require('./send-mail')

const client = new szamlazz.Client({
  authToken: process.env.SZAMLAZZ_TOKEN
});

module.exports = async (invoiceData) => {
  const {
    comment,
    orderNumber,
    invoiceIdPrefix,
    logoExtra,
  } = invoiceData
  const seller = new szamlazz.Seller(invoiceData.seller)
  const buyer = new szamlazz.Buyer(invoiceData.buyer)
  const items = invoiceData.items.map(item => new szamlazz.Item(item))

  // TODO: invoiceIdPrefix
  // TODO: issueDate
  // TODO: fulfillmentDate
  // TODO: dueDate
  // TODO: logoExtra
  const invoice = new szamlazz.Invoice({
    paymentMethod: szamlazz.PaymentMethod.PayPal,
    currency: szamlazz.Currency.EUR,
    language: szamlazz.Language.English,
    invoiceIdPrefix,
    comment,
    orderNumber,
    seller,
    buyer,
    items,
    paid: true
  })

  if (process.env.TEST_MODE) {
    await sendMail('INVOICE TEST', JSON.stringify(invoice, null, ' '))
    return Promise.resolve(invoice)
  }

  return new Promise((resolve, reject) => {
    client.issueInvoice(invoice, (err, result) => {
      if (err) {
        return reject(err)
      }
      resolve(result.invoiceId)
    })
  })
}
