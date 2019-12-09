const roundTo = require('round-to')
const getCateringPerTicket = require('./get-catering-per-ticket')

module.exports = (tickets, eventConfig) => {
	return tickets.reduce((items, ticket, i) => {
    const {
      price,
      quantity,
      release_title: title,
    } = ticket

    const cateringPartial = getCateringPerTicket(title, eventConfig)
    const ticketPartial = roundTo(price - (cateringPartial * 1.27), 2);

		items.push({
      label: title,
      quantity,
      unit: 'qt',
      vat: 27, // can be a number or a special string
      grossUnitPrice: ticketPartial, // calculates gross and net values from per item net
      comment: title
    })
    items.push({
      label: 'Conference catering fee',
      quantity,
      unit: 'qt',
      vat: 27, // can be a number or a special string
      grossUnitPrice: roundTo(cateringPartial * 1.27, 2), // calculates gross and net values from per item net
      comment: 'Conference catering fee'
    })

    return items
	}, [])
}
