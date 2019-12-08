module.exports = (ticketName, eventConfig) => {
  const { cateringOf } = eventConfig
  return cateringOf(ticketName)
}
