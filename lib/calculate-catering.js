module.exports = (data, eventConfig) => {
    return data.map(order => {

        const catering = Object
          .values(order.quantities)
          .map(ticket => getCateringPerTicket(ticket.release, eventConfig))

        return Object.assign({}, order, { catering })
    })
}
