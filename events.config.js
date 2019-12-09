module.exports = {
  'reinforce-conf-2020': {
    label: "Reinforce Conference 2020",
    date: '2020. March 12',
    invoiceIdPrefix: "",
    email: {
      replyToAddress: 'team@jsconfbp.com',
      subject: 'Your invoice for Reinforce Conference 2020',
      message: 'Please find your invoice for your Reinforce Conference 2020 ticket purchase.'
    },
    cateringOf: (ticket) => {
      return 45.4
    },
  },
  'jsconf-budapest-2020': {
    date: '2020. September 24-25',
    label: "JSConf Budapest 2020",
    invoiceIdPrefix: "",
    email: {
      replyToAddress: 'team@jsconfbp.com',
      subject: 'Your invoice for JSConf Budapest 2020',
      message: 'Please find your invoice for your JSConf Budapest 2020 ticket purchase.'
    },
    cateringOf: (ticket) => {
      return 98
    },
  },
  'integration-test-event-2020': {
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
  },
}
