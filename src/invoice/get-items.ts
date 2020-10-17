import getItemizedCosts from './get-itemized-costs';

export default (event, order) => {
  const items = getItemizedCosts(order.line_items, event);

  return items;
};
