const mailgun = require("mailgun-js");
const {
  MAILGUN_API_KEY,
  MAILGUN_DOMAIN
} = process.env

const mg = mailgun({apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN});

module.exports = async (subject, text) => {
  const data = {
    from: 'TISZA JSSC <kft@jsconfbp.com>',
    to: 'nec@jsconfbp.com',
    subject,
    text,
  }

  mg.messages().send(data, function (error, body) {
    if (error) {
      console.log(error);
      return;
    }

    console.log(body);
  });
}
