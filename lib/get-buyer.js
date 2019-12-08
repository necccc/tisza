module.exports = (event, order) => {
  const {
    name,
    company_name,
    billing_address: {
      address,
      city,
      country_name: country,
      vat_number: taxNumber,
    }
  } = order

  const buyerName = company_name || name;

  return {
    name: buyerName,
    country,
    zip,
    city,
    address: address.replace(/[\r]?\n/g, ' '),
    taxNumber,
    postAddress: {
      name: buyerName,
      zip,
      city,
      address
    },
    issuerName: '',
    identifier: 1,
    phone: '',
    comment: ''
  }
}
