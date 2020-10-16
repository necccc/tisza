import szamlazz from 'szamlazz.js';
import getBuyer from './get-buyer'
import getSeller from './get-seller'
import getItems from './get-items'

export default async (
  order: any,
  config: any,
  Seller: any = szamlazz.Seller,
  Buyer: any = szamlazz.Buyer,
  Item: any = szamlazz.Item,
  Invoice: any = szamlazz.Invoice
) => {
  const seller = new Seller(getSeller(config));
  const buyer = new Buyer(getBuyer(order));
  const items = getItems(config, order).map(item => new Item(item));

  const orderNumber = order.reference
  const invoiceIdPrefix = config.invoiceIdPrefix
  const logoImage = config.logoImage
  const comment = config.invoiceComment

  return new Invoice({
    paymentMethod: szamlazz.PaymentMethod.PayPal,
    currency: szamlazz.Currency.EUR,
    language: szamlazz.Language.English,
    invoiceIdPrefix,
    logoImage,
    comment,
    orderNumber,
    seller,
    buyer,
    items,
    paid: true,
  });
}
