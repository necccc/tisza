export default (ticket, prop, types) => {
  const event = types.find(obj => {

    if (obj['ticket-name-contains'] === '*') return true;

    return ticket.includes(obj['ticket-name-contains'])
  })

  return event[prop]
}
