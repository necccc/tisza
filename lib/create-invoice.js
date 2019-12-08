const szamlazz = require('szamlazz.js')

const client = new szamlazz.Client({
  authToken: process.env.SZAMLAZZ_TOKEN
});

module.exports = async (invoiceData) => {
  const {
    comment,
    orderNumber
  } = invoiceData
  const seller = new szamlazz.Seller(invoiceData.seller)
  const buyer = new szamlazz.Buyer(invoiceData.buyer)
  const items = invoiceData.items.map(item => new szamlazz.Item(item))
  const invoice = new szamlazz.Invoice({
    paymentMethod: szamlazz.PaymentMethod.PayPal,
    currency: szamlazz.Currency.EUR,
    language: szamlazz.Language.English,
    comment,
    orderNumber,
    seller,
    buyer,
    items,
  })

  return new Promise((resolve, reject) => {
    client.issueInvoice(invoice, (err, result) => {
      if (err) {
        console.error(err) // handle errors
        return reject(err)
      }
      resolve(result)
    })
  })
}
