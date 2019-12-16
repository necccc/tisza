module.exports = (event, order) => {
  const {
    name,
    email,
    company_name,
    billing_address: {
      address,
      city,
      zip_postal_code: zip = '',
      country_name: country,
      vat_number,
      state_province_region: state = '',
    }
  } = order

  const buyerName = company_name || name;
  const taxNumber = vat_number === '0' ? '' : vat_number;

  return {
    name: buyerName,
    email,
    sendEmail: true,
    country,
    zip,
    city,
    address: address.replace(/[\r]?\n/g, ' '),
    taxNumber,
    postAddress: {
      name: buyerName,
      zip: '',
      city,
      address
    },
    issuerName: '',
    identifier: 1,
    phone: '',
    issuerName: name,
  }
}
