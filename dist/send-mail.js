"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mailgun_js_1 = __importDefault(require("mailgun-js"));
const { MAILGUN_API_KEY, MAILGUN_DOMAIN, } = process.env;
const mg = mailgun_js_1.default({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN });
exports.default = (subject, text) => {
    const data = {
        from: 'TISZA JSSC <kft@jsconfbp.com>',
        to: 'nec@jsconfbp.com',
        subject,
        text,
    };
    mg.messages().send(data, (error, body) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log(body);
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC1tYWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlbmQtbWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDREQUFpQztBQUVqQyxNQUFNLEVBQ0osZUFBZSxFQUNmLGNBQWMsR0FDZixHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFFaEIsTUFBTSxFQUFFLEdBQUcsb0JBQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFFeEUsa0JBQWUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDL0IsTUFBTSxJQUFJLEdBQUc7UUFDWCxJQUFJLEVBQUUsK0JBQStCO1FBQ3JDLEVBQUUsRUFBRSxrQkFBa0I7UUFDdEIsT0FBTztRQUNQLElBQUk7S0FDTCxDQUFDO0lBRUYsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDdkMsSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU87U0FDUjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWFpbGd1biBmcm9tICdtYWlsZ3VuLWpzJztcblxuY29uc3Qge1xuICBNQUlMR1VOX0FQSV9LRVksXG4gIE1BSUxHVU5fRE9NQUlOLFxufSA9IHByb2Nlc3MuZW52O1xuXG5jb25zdCBtZyA9IG1haWxndW4oeyBhcGlLZXk6IE1BSUxHVU5fQVBJX0tFWSwgZG9tYWluOiBNQUlMR1VOX0RPTUFJTiB9KTtcblxuZXhwb3J0IGRlZmF1bHQgKHN1YmplY3QsIHRleHQpID0+IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBmcm9tOiAnVElTWkEgSlNTQyA8a2Z0QGpzY29uZmJwLmNvbT4nLFxuICAgIHRvOiAnbmVjQGpzY29uZmJwLmNvbScsXG4gICAgc3ViamVjdCxcbiAgICB0ZXh0LFxuICB9O1xuXG4gIG1nLm1lc3NhZ2VzKCkuc2VuZChkYXRhLCAoZXJyb3IsIGJvZHkpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhib2R5KTtcbiAgfSk7XG59O1xuIl19