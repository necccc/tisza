import errorHandler from '../error-handler'
import debugXML from '../lib/debug-xml';

export default async (
  invoice,
  client
) => {
  return new Promise((resolve, reject) => {
    client.issueInvoice(invoice, (err, result) => {
      if (err) {
        errorHandler('INVOICE ERROR', debugXML(invoice))
        return reject(err);
      }
      resolve(result.invoiceId);
    });
  });
}
