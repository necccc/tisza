"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import YAML from 'yaml';
const szamlazz_js_1 = __importDefault(require("szamlazz.js"));
const send_mail_1 = __importDefault(require("./send-mail"));
const debug_xml_1 = __importDefault(require("./debug-xml"));
const client = new szamlazz_js_1.default.Client({
    authToken: process.env.SZAMLAZZ_TOKEN,
    eInvoice: true,
});
exports.default = async (invoiceData) => {
    const { comment, orderNumber, invoiceIdPrefix, logoImage = '', } = invoiceData;
    const seller = new szamlazz_js_1.default.Seller(invoiceData.seller);
    const buyer = new szamlazz_js_1.default.Buyer(invoiceData.buyer);
    const items = invoiceData.items.map(item => new szamlazz_js_1.default.Item(item));
    const invoice = new szamlazz_js_1.default.Invoice({
        paymentMethod: szamlazz_js_1.default.PaymentMethod.PayPal,
        currency: szamlazz_js_1.default.Currency.EUR,
        language: szamlazz_js_1.default.Language.English,
        invoiceIdPrefix,
        logoImage,
        comment,
        orderNumber,
        seller,
        buyer,
        items,
        paid: true,
    });
    if (process.env.TEST_MODE) {
        await send_mail_1.default('INVOICE TEST', debug_xml_1.default(invoice));
        console.log(client._generateInvoiceXML(invoice)); // eslint-disable-line no-underscore-dangle
        return Promise.resolve(debug_xml_1.default(invoice));
    }
    return new Promise((resolve, reject) => {
        client.issueInvoice(invoice, (err, result) => {
            if (err) {
                send_mail_1.default('INVOICE ERROR', debug_xml_1.default(invoice));
                return reject(err);
            }
            resolve(result.invoiceId);
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWludm9pY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY3JlYXRlLWludm9pY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQkFBMkI7QUFDM0IsOERBQW1DO0FBQ25DLDREQUFtQztBQUNuQyw0REFBbUM7QUFFbkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxxQkFBUSxDQUFDLE1BQU0sQ0FBQztJQUNqQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjO0lBQ3JDLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUFFO0lBQ25DLE1BQU0sRUFDSixPQUFPLEVBQ1AsV0FBVyxFQUNYLGVBQWUsRUFDZixTQUFTLEdBQUcsRUFBRSxHQUNmLEdBQUcsV0FBVyxDQUFDO0lBQ2hCLE1BQU0sTUFBTSxHQUFHLElBQUkscUJBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sS0FBSyxHQUFHLElBQUkscUJBQVEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BELE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxxQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRXJFLE1BQU0sT0FBTyxHQUFHLElBQUkscUJBQVEsQ0FBQyxPQUFPLENBQUM7UUFDbkMsYUFBYSxFQUFFLHFCQUFRLENBQUMsYUFBYSxDQUFDLE1BQU07UUFDNUMsUUFBUSxFQUFFLHFCQUFRLENBQUMsUUFBUSxDQUFDLEdBQUc7UUFDL0IsUUFBUSxFQUFFLHFCQUFRLENBQUMsUUFBUSxDQUFDLE9BQU87UUFDbkMsZUFBZTtRQUNmLFNBQVM7UUFDVCxPQUFPO1FBQ1AsV0FBVztRQUNYLE1BQU07UUFDTixLQUFLO1FBQ0wsS0FBSztRQUNMLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQyxDQUFDO0lBRUgsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRTtRQUN6QixNQUFNLG1CQUFRLENBQUMsY0FBYyxFQUFFLG1CQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUVsRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsMkNBQTJDO1FBRTdGLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDM0M7SUFFRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3JDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzNDLElBQUksR0FBRyxFQUFFO2dCQUNQLG1CQUFRLENBQUMsZUFBZSxFQUFFLG1CQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDN0MsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEI7WUFDRCxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgWUFNTCBmcm9tICd5YW1sJztcbmltcG9ydCBzemFtbGF6eiBmcm9tICdzemFtbGF6ei5qcyc7XG5pbXBvcnQgc2VuZE1haWwgZnJvbSAnLi9zZW5kLW1haWwnO1xuaW1wb3J0IGRlYnVnWE1MIGZyb20gJy4vZGVidWcteG1sJztcblxuY29uc3QgY2xpZW50ID0gbmV3IHN6YW1sYXp6LkNsaWVudCh7XG4gIGF1dGhUb2tlbjogcHJvY2Vzcy5lbnYuU1pBTUxBWlpfVE9LRU4sXG4gIGVJbnZvaWNlOiB0cnVlLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChpbnZvaWNlRGF0YSkgPT4ge1xuICBjb25zdCB7XG4gICAgY29tbWVudCxcbiAgICBvcmRlck51bWJlcixcbiAgICBpbnZvaWNlSWRQcmVmaXgsXG4gICAgbG9nb0ltYWdlID0gJycsXG4gIH0gPSBpbnZvaWNlRGF0YTtcbiAgY29uc3Qgc2VsbGVyID0gbmV3IHN6YW1sYXp6LlNlbGxlcihpbnZvaWNlRGF0YS5zZWxsZXIpO1xuICBjb25zdCBidXllciA9IG5ldyBzemFtbGF6ei5CdXllcihpbnZvaWNlRGF0YS5idXllcik7XG4gIGNvbnN0IGl0ZW1zID0gaW52b2ljZURhdGEuaXRlbXMubWFwKGl0ZW0gPT4gbmV3IHN6YW1sYXp6Lkl0ZW0oaXRlbSkpO1xuXG4gIGNvbnN0IGludm9pY2UgPSBuZXcgc3phbWxhenouSW52b2ljZSh7XG4gICAgcGF5bWVudE1ldGhvZDogc3phbWxhenouUGF5bWVudE1ldGhvZC5QYXlQYWwsXG4gICAgY3VycmVuY3k6IHN6YW1sYXp6LkN1cnJlbmN5LkVVUixcbiAgICBsYW5ndWFnZTogc3phbWxhenouTGFuZ3VhZ2UuRW5nbGlzaCxcbiAgICBpbnZvaWNlSWRQcmVmaXgsXG4gICAgbG9nb0ltYWdlLFxuICAgIGNvbW1lbnQsXG4gICAgb3JkZXJOdW1iZXIsXG4gICAgc2VsbGVyLFxuICAgIGJ1eWVyLFxuICAgIGl0ZW1zLFxuICAgIHBhaWQ6IHRydWUsXG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5URVNUX01PREUpIHtcbiAgICBhd2FpdCBzZW5kTWFpbCgnSU5WT0lDRSBURVNUJywgZGVidWdYTUwoaW52b2ljZSkpO1xuXG4gICAgY29uc29sZS5sb2coY2xpZW50Ll9nZW5lcmF0ZUludm9pY2VYTUwoaW52b2ljZSkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRlYnVnWE1MKGludm9pY2UpKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2xpZW50Lmlzc3VlSW52b2ljZShpbnZvaWNlLCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgc2VuZE1haWwoJ0lOVk9JQ0UgRVJST1InLCBkZWJ1Z1hNTChpbnZvaWNlKSk7XG4gICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUocmVzdWx0Lmludm9pY2VJZCk7XG4gICAgfSk7XG4gIH0pO1xufTtcbiJdfQ==