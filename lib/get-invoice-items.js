const getItemizedCosts = require('./get-itemized-costs')


module.exports = (event, order) => {
  const costs = getItemizedCosts(order.line_items,event);

  return costs
}
