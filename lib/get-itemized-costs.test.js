const getItemizedCosts = require('./get-itemized-costs')

const tickets = [
  {
      "_type": "line_item",
      "id": 6540964,
      "title": "Early Bird",
      "created_at": "2019-12-08T21:08:04.000+01:00",
      "updated_at": "2019-12-08T21:08:04.000+01:00",
      "quantity": 2,
      "price": 205.0,
      "test_mode": true,
      "release_id": 1219124,
      "release_slug": "qqtuetcorjg",
      "release_title": "Early Bird"
  },
  {
    "_type": "line_item",
    "id": 6540964,
    "title": "Early Bird combo free",
    "created_at": "2019-12-08T21:08:04.000+01:00",
    "updated_at": "2019-12-08T21:08:04.000+01:00",
    "quantity": 1,
    "price": 0,
    "test_mode": true,
    "release_id": 1219124,
    "release_slug": "qqtuetcorjg",
    "release_title": "Early Bird"
}
]

const event = {
  date: 'September 24-25, 2020',
  label: "JSConf Budapest 2020",
  invoiceIdPrefix: "",
  email: {
    replyToAddress: 'nec@jsconfbp.com',
    subject: 'Your invoice for Integration Test Event 2020',
    message: 'Please find your invoice for your Integration Test Event 2020 ticket purchase.'
  },
  cateringOf: (ticket) => {
    return 98
  },
}

describe('sets catering as separate item', () => {

  test('create 2 items or every ticket type', () => {
    const items = getItemizedCosts(tickets, event)
    expect(items).toHaveLength(2)
  });

  test('item names and comments are correct', () => {
    const items = getItemizedCosts(tickets, event)
    expect(items[0].label).toBe('Early Bird')
    expect(items[0].comment).toBe('Ticket for JSConf Budapest 2020, September 24-25, 2020')
    expect(items[1].label).toBe('Conference catering fee')

  });

});

describe('price rounding', () => {

  test('rounds prices to 2 digits', () => {
    const items = getItemizedCosts(tickets, event)

    expect(items[0].grossUnitPrice.toString().split('.')[1].length).toBe(2)
    expect(items[1].grossUnitPrice.toString().split('.')[1].length).toBe(2)
  });

  test('rounding without errors', () => {
    const items = getItemizedCosts(tickets, event)
console.log(items);

    expect( (items[0].grossUnitPrice + items[1].grossUnitPrice) ).toBe(205)
  });

});
