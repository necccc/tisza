import getByTicketType from './get-property-by-ticket-type'

export default (ticketName, eventConfig) => {

  if (typeof eventConfig.catering === 'undefined') return 0

  return getByTicketType(ticketName, 'net-price', eventConfig.catering)
}
