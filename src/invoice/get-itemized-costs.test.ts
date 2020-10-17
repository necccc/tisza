import getItemizedCosts from './get-itemized-costs';

const tickets = [
  {
    _type: 'line_item',
    id: 6540964,
    title: 'Early Bird',
    created_at: '2019-12-08T21:08:04.000+01:00',
    updated_at: '2019-12-08T21:08:04.000+01:00',
    quantity: 2,
    price: 205.0,
    test_mode: true,
    release_id: 1219124,
    release_slug: 'qqtuetcorjg',
    release_title: 'Early Bird',
  },
  {
    _type: 'line_item',
    id: 6540964,
    title: 'Free ticket',
    created_at: '2019-12-08T21:08:04.000+01:00',
    updated_at: '2019-12-08T21:08:04.000+01:00',
    quantity: 1,
    price: 0,
    test_mode: true,
    release_id: 1219124,
    release_slug: 'qqtuetcorjg',
    release_title: 'Free ticket',
  },
  {
    _type: 'line_item',
    id: 6540964,
    title: 'Early Workshop ticket',
    created_at: '2019-12-08T21:08:04.000+01:00',
    updated_at: '2019-12-08T21:08:04.000+01:00',
    quantity: 1,
    price: 300,
    test_mode: true,
    release_id: 1219124,
    release_slug: 'qqtuetcorjg',
    release_title: 'Early Workshop ticket',
  },
  {
    _type: 'line_item',
    id: 6540964,
    title: 'Early Double ticket',
    created_at: '2019-12-08T21:08:04.000+01:00',
    updated_at: '2019-12-08T21:08:04.000+01:00',
    quantity: 1,
    price: 450,
    test_mode: true,
    release_id: 1219124,
    release_slug: 'qqtuetcorjg',
    release_title: 'Early Workshop ticket',
  },
  {
    _type: 'line_item',
    id: 6540964,
    title: 'Online admission',
    created_at: '2019-12-08T21:08:04.000+01:00',
    updated_at: '2019-12-08T21:08:04.000+01:00',
    quantity: 1,
    price: 150,
    test_mode: true,
    release_id: 1219124,
    release_slug: 'qqtuetcorjg',
    release_title: 'Online admission ticket',
  },
];

const testEvents = {
  fixDateSingleCatering: {
    label: 'JSConf Budapest 2021',
    date: 'September 23, 2020',
    catering: [
      {
        'ticket-name-contains': "*",
        'net-price': 90.3
      }
    ],
  },
  multipleDatesSingleCatering: {
    label: 'JSConf Budapest 2021',
    dates: [
      {
        'ticket-name-contains': "Workshop",
        date: "April 8, 2020"
      },
      {
        'ticket-name-contains': "*",
        date: "April 6-7, 2020"
      }
    ],
    catering: [
      {
        'ticket-name-contains': "*",
        'net-price': 90
      },
    ],
  },
  fixDateMultipleCatering: {
    label: 'JSConf Budapest 2021',
    dates: [
      {
        'ticket-name-contains': "*",
        date: "April 6-7, 2020"
      }
    ],
    catering: [
      {
        'ticket-name-contains': "*",
        'net-price': 90
      },
      {
        'ticket-name-contains': "Double",
        'net-price': 180
      }
    ]
  },
  multipleDateMultipleCatering: {
    label: 'JSConf Budapest 2021',
    dates: [
      {
        'ticket-name-contains': "Workshop",
        date: "April 8, 2020"
      },
      {
        'ticket-name-contains': "*",
        date: "April 6-7, 2020"
      }
    ],
    catering: [
      {
        'ticket-name-contains': "*",
        'net-price': 90
      },
      {
        'ticket-name-contains': "Double",
        'net-price': 180
      }
    ]
  },
  multipleDateFreeCatering: {
    label: 'JSConf Budapest 2021',
    dates: [
      {
        'ticket-name-contains': "Workshop",
        date: "April 8, 2020"
      },
      {
        'ticket-name-contains': "*",
        date: "April 6-7, 2020"
      }
    ],
    catering: [
      {
        'ticket-name-contains': "*",
        'net-price': 90
      },
      {
        'ticket-name-contains': "Double",
        'net-price': 180
      },
      {
        'ticket-name-contains': "Online",
        'net-price': 0
      },
    ]
  },
  fixDateFreeCatering: {
    label: 'JSConf Budapest 2021',
    dates: [
      {
        'ticket-name-contains': "*",
        date: "April 6-7, 2020"
      }
    ],
    catering: [
      {
        'ticket-name-contains': "*",
        'net-price': 90
      },
      {
        'ticket-name-contains': "Double",
        'net-price': 180
      },
      {
        'ticket-name-contains': "Online",
        'net-price': 0
      },
    ]
  },
}

describe('sets catering as separate item', () => {
  test('create 2 items or every ticket type', () => {
    const items = getItemizedCosts([ tickets[0] ], testEvents.fixDateSingleCatering);
    expect(items).toHaveLength(2);
  });

  test('item names and comments are correct', () => {
    const items = getItemizedCosts([ tickets[0] ], testEvents.fixDateSingleCatering);
    expect(items[0].label).toBe('Early Bird');
    expect(items[0].comment).toBe('Ticket for JSConf Budapest 2021, September 23, 2020');
    expect(items[1].label).toBe('Conference catering fee');
  });
});

describe('price rounding', () => {
  test('rounds prices to 2 digits', () => {
    const items = getItemizedCosts([ tickets[0] ], testEvents.fixDateSingleCatering);

    console.log(items)
    expect(items[0].grossUnitPrice.toString().split('.')[1].length).toBe(2);
    expect(items[1].grossUnitPrice.toString().split('.')[1].length).toBe(2);
  });

  test('rounding without errors', () => {
    const items = getItemizedCosts([ tickets[0] ], testEvents.fixDateSingleCatering);

    expect((items[0].grossUnitPrice + items[1].grossUnitPrice)).toBe(205);
  });
});

describe('skip catering item if its free', () => {

})

describe('skip items if they are free', () => {

})

describe('multiple orders with different catering', () => {

})


describe('event date', () => {
  test('determines date according to ticket name', () => {
    const items = getItemizedCosts([ tickets[2] ], testEvents.fixDateSingleCatering);

    expect(items[0].label).toBe('Early Workshop ticket');
    expect(items[0].comment).toBe('Ticket for JSConf Budapest 2020, September 23, 2020');
    expect(items[1].label).toBe('Conference catering fee');
  });
});


describe('multiple orders with different date', () => {

})
