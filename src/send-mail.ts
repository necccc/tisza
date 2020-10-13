import mailgun from 'mailgun-js';

const {
  MAILGUN_API_KEY,
  MAILGUN_DOMAIN,
} = process.env;

const mg = mailgun({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN });

export default (subject, text) => {
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
