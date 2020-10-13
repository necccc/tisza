import getItemizedCosts from './get-itemized-costs';


export default (event, order) => {
  const costs = getItemizedCosts(order.line_items, event);

  return costs;
};
