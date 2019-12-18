const YAML = require('yaml')
const szamlazz = require('szamlazz.js')

const sendMail = require('./send-mail')
const debugXML = require('./debug-xml')

const client = new szamlazz.Client({
  authToken: process.env.SZAMLAZZ_TOKEN
});

module.exports = async (invoiceData) => {
  const {
    comment,
    orderNumber,
    invoiceIdPrefix,
    logoImage = '',
  } = invoiceData
  const seller = new szamlazz.Seller(invoiceData.seller)
  const buyer = new szamlazz.Buyer(invoiceData.buyer)
  const items = invoiceData.items.map(item => new szamlazz.Item(item))

  const invoice = new szamlazz.Invoice({
    paymentMethod: szamlazz.PaymentMethod.PayPal,
    currency: szamlazz.Currency.EUR,
    language: szamlazz.Language.English,
    invoiceIdPrefix,
    logoImage,
    comment,
    orderNumber,
    seller,
    buyer,
    items,
    paid: true
  })

  if (process.env.TEST_MODE) {
    await sendMail('INVOICE TEST', debugXML(invoice))
    return Promise.resolve(debugXML(invoice))
  }

  return new Promise((resolve, reject) => {
    client.issueInvoice(invoice, (err, result) => {
      if (err) {
        sendMail('INVOICE ERROR', debugXML(invoice))
        return reject(err)
      }
      resolve(result.invoiceId)
    })
  })
}
