const numeral = require('numeral')
const getCateringPerTicket = require('./get-catering-per-ticket')

module.exports = (tickets, eventConfig) => {
  numeral.defaultFormat('0.00')
	return tickets.reduce((items, ticket, i) => {
    const {
      price,
      quantity,
      release_title: title,
    } = ticket

    const catering = getCateringPerTicket(title, eventConfig)

    const netTicketPrice = (price / 1.27) - catering;

		items.push({
      label: title,
      quantity,
      unit: 'qt',
      vat: 27, // can be a number or a special string
      netUnitPrice: numeral(netTicket).format(netTicketPrice), // calculates gross and net values from per item net
      comment: title
    })
    items.push({
      label: 'Conference catering fee',
      quantity,
      unit: 'qt',
      vat: 27, // can be a number or a special string
      netUnitPrice: numeral(netTicket).format(catering), // calculates gross and net values from per item net
      comment: 'Conference catering fee'
    })

    return items
	}, [])
}
