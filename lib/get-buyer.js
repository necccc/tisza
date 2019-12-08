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
  let zipCode = zip
  const zipRx = /[ ^]?\d{3,6}\b/g;

  return {
    name: buyerName,
    country,
    zip,
    city,
    address,
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
