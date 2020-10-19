export default (order) => {
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
    },
  } = order;

  const buyerName = company_name || name;
  const taxNumber = vat_number === '0' ? '' : vat_number;
  const addressWithState = `${address.replace(/[\r]?\n/g, ' ')} ${state}`;

  return {
    name: buyerName,
    email,
    sendEmail: true,
    country,
    zip,
    city,
    address: addressWithState,
    taxNumber,
    postAddress: {
      name: buyerName,
      zip,
      city,
      address: addressWithState,
    },
    identifier: 1,
    phone: '',
    issuerName: name,
  };
};
