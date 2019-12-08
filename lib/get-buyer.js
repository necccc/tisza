module.exports = (event, order) => {
  const {
    name,
    billing_address: {
      address,
      city,
      zip_postal_code: zip = '',
      country_name: country,
      vat_number: taxNumber,
      company_name,
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
