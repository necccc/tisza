const getItemizedCosts = require('./get-itemized-costs')

const tickets = [
  {
      "_type": "line_item",
      "id": 6540964,
      "title": "Early Bird",
      "created_at": "2019-12-08T21:08:04.000+01:00",
      "updated_at": "2019-12-08T21:08:04.000+01:00",
      "quantity": 2,
      "price": 133.0,
      "test_mode": true,
      "release_id": 1219124,
      "release_slug": "qqtuetcorjg",
      "release_title": "Early Bird"
  }
]

const event = {
  date: '2020. September 24-25',
  label: "JSConf Budapest 2020",
  invoiceIdPrefix: "",
  email: {
    replyToAddress: 'nec@jsconfbp.com',
    subject: 'Your invoice for Integration Test Event 2020',
    message: 'Please find your invoice for your Integration Test Event 2020 ticket purchase.'
  },
  cateringOf: (ticket) => {
    return 45.4
  },
}


describe('sets catering as separate item', () => {

  test('create 2 items or every ticket type', () => {
    const items = getItemizedCosts(tickets, event)
    expect(items).toHaveLength(2)
  });

});

describe('price rounding', () => {

  test('rounds prices to 2 digits', () => {
    const items = getItemizedCosts(tickets, event)

    expect(items[0].grossUnitPrice.toString().length).toBeLessThanOrEqual(5)
    expect(items[1].grossUnitPrice.toString().length).toBeLessThanOrEqual(5)
  });

  test('rounding without errors', () => {
    const items = getItemizedCosts(tickets, event)

    expect( (items[0].grossUnitPrice + items[1].grossUnitPrice) ).toBe(133)
  });

});
