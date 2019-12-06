'use strict'
require('dotenv').config()
const szamlazz = require('szamlazz.js')

const client = new szamlazz.Client({
  authToken: process.env.SZAMLAZZ_TOKEN
});

const seller = new szamlazz.Seller({ // everyting is optional
  bank: {
    name: 'Test Bank <name>',
    accountNumber: '11111111-11111111-11111111'
  },
  email: {
    replyToAddress: 'test@email.com',
    subject: 'Invocie email subject',
    message: 'This is an email message'
  },
  issuerName: ''
})

const buyer = new szamlazz.Buyer({
  name: 'Some Buyer Name ' + Math.random(),
  country: '',
  zip: '1234',
  city: 'City',
  address: 'Some street address',
  taxNumber: '12345678-1-42',
  postAddress: {
    name: 'Some Buyer Name',
    zip: '1234',
    city: 'City',
    address: 'Some street address'
  },
  issuerName: '',
  identifier: 1,
  phone: '',
  comment: ''
})

const soldItem1 = new szamlazz.Item({
  label: 'JSConf Budapest 2020 Early Bird ticket',
  quantity: 2,
  unit: 'qt',
  vat: 27, // can be a number or a special string
  netUnitPrice: 260, // calculates gross and net values from per item net
  comment: 'JSConf Budapest 2020 Early Bird ticket'
})

const soldItem2 = new szamlazz.Item({
  label: 'Catering fee',
  quantity: 2,
  unit: 'qt',
  vat: 27, // can be a number or a special string
  netUnitPrice: 40, // calculates gross and net values from per item net
  comment: 'Catering fee'
})








const invoice = new szamlazz.Invoice({
  paymentMethod: szamlazz.PaymentMethod.PayPal,
  currency: szamlazz.Currency.EUR,
  language: szamlazz.Language.English,
  comment: 'Conference date: 2020. September 24-25. The invoice includes mediated services.',
  orderNumber: 'AX3V',
  seller: seller, // the seller, required
  buyer: buyer, // the buyer, required
  items: [ soldItem1, soldItem2 ] // the sold items, required
})

client.issueInvoice(invoice, (e, result) =>
{
  if (e) {
    console.error(e.message, e.code) // handle errors
    throw e;
  }

  if (result.pdf) {
    // a Buffer with the pdf data is available if requestInvoiceDownload === true
  }
})
