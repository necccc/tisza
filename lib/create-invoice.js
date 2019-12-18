const YAML = require('yaml')
const szamlazz = require('szamlazz.js')

const sendMail = require('./send-mail')

const client = new szamlazz.Client({
  authToken: process.env.SZAMLAZZ_TOKEN
});

const debugXML = (invoice) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<xmlszamla xmlns="http://www.szamlazz.hu/xmlszamla" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.szamlazz.hu/xmlszamla https://www.szamlazz.hu/szamla/docs/xsds/agent/xmlszamla.xsd">
${invoice._generateXML()}
</xmlszamla>`

}
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
        return reject(err)
      }
      resolve(result.invoiceId)
    })
  })
}
