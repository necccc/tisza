import szamlazz from 'szamlazz.js';

export default async (
  order: any,
  config: any,
  Seller: any = szamlazz.Seller,
  Buyer: any = szamlazz.Buyer,
  Item: any = szamlazz.Item,
  Invoice: any = szamlazz.Invoice
) => {

  const data = {
    comment: `The invoice includes mediated services. \nPaid in full. \nThis document was issued electronically and is therefore valid without signature.`,
    orderNumber: order.reference,
    invoiceIdPrefix: config.invoiceIdPrefix,
    logoImage: config.logoImage,
    buyer: getBuyer(order),
    seller: getSeller(config),
    items: getInvoiceItems(config, order),
  }

  const {
    comment,
    orderNumber,
    invoiceIdPrefix,
    logoImage = '',
  } = data;

  const seller = new Seller(getSeller(config));
  const buyer = new Buyer(getBuyer(order));
  const items = invoiceData.items.map(item => new Item(item));


}
