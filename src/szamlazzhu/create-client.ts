import szamlazz from 'szamlazz.js';

export default () => {
  return new szamlazz.Client({
    authToken: process.env.SZAMLAZZ_TOKEN,
    eInvoice: true,
  });
}
