module.exports = (billing_address) => {
	const {
		address,
		city,
		country,
		vat_number,
	} = billing_address;

	return {
		"Billing Address": address,
		City: city,
		Country: country,
		"VAT Number": vat_number,
	}
}
