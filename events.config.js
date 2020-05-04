module.exports = {


  'reinforce2020': {
    label: "Reinforce Conference 2020",
    date: 'April 6-7, 2020',
    getDate: (ticketName) => {
      if (ticketName.includes('Workshop')) {
        return 'April 8, 2020';
      }
      return 'April 6-7, 2020';
    },
    invoiceIdPrefix: "RF",
    logoImage: "RF-szamlazzhu.png",
    email: {
      replyToAddress: 'hello@reinforceconf.com',
      subject: 'Your invoice for Reinforce Conference 2020',
      message: `Dear Attendee!

Thank you for taking part in Reinforce AI Conference 2020.

Please find attached our official invoice for the Reinforce AI conference.
In case you have an issue with the invoice please reply to this e-mail.
In case you have a general question regarding the conference please write to: hello@reinforceconf.com

The Reinforce conference team`
    },
    bank: {
      name: "Raiffeisen Bank, SWIFT: UBRTHUHB",
      accountNumber: "HU73-1201-0659-0160-2199-0040-0002"
    },
    getCateringOf: (ticketName) => {
      // NET catering prices
      if (ticketName.includes('Diversity')) {
        return 47.24 * 2
      }

      if (ticketName.includes('Workshop')) {
        return 23.62
      }

      return 47.24
    },
  },



  'jsconf-budapest-2021': {
    label: "JSConf Budapest 2021",
    date: 'September 23-24, 2021',
    getDate: (ticketName) => {
      return 'September 23-24, 2021';
    },
    invoiceIdPrefix: "JSCBP",
    logoImage: "JSCBP-szamlazzhu.png",
    email: {
      replyToAddress: 'team@jsconfbp.com',
      subject: 'Your invoice for JSConf Budapest 2021',
      message: `Dear Attendee!

Thank you for purchasing tickets for JSConf Budapest 2021.

Please find attached our official invoice for the conference.
In case you have an issue with the invoice, or you have a general question
regarding the conference please write to: team@jsconfbp.com

The JSConf Budapest team`
    },
    bank: {
      name: "Raiffeisen Bank, SWIFT: UBRTHUHB",
      accountNumber: "HU18-1201-0659-0160-2199-0020-0008"
    },
    getCateringOf: (ticket) => {
      // NET catering prices
      return 98
    },
  },



  'integration-test-event-2020': {
    label: "JSConf Budapest 2020",
    date: 'September 24-25, 2020',
    getDate: (ticketName) => {
      return 'September 24-25, 2020';
    },
    invoiceIdPrefix: "WIPAO",
    logoImage: "JSCBP-szamlazzhu.png",
    email: {
      replyToAddress: 'nec@jsconfbp.com',
      subject: 'Your invoice for Integration Test Event 2020',
      message: `Dear Attendee!

Thank you for taking part in Reinforce AI Conference 2020.

Please find attached our official invoice for the Reinforce AI conference.
In case you have an issue with the invoice please reply to this e-mail.
In case you have a general question regarding the conference please write to: hello@reinforceconf.com

The Reinforce conference team`
    },
    bank: {
      name: "Raiffeisen Bank, SWIFT: UBRTHUHB",
      accountNumber: "HU18-1201-0659-0160-2199-0020-0008"
    },
    getCateringOf: (ticket) => {
      // NET catering prices
      return 45.4
    },
  },
}
