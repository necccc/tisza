module.exports = (quantities) => {
	return Object.values(quantities).map(ticket => {
		const { release, quantity } = ticket
		return `${quantity} x ${release}`
	}).join("\n")
}
