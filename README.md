# tisza

[![Build Status](https://travis-ci.org/jssc-eu/tisza.svg?branch=master)](https://travis-ci.org/jssc-eu/tisza)

ti.to - szamlazz.hu integration proxy service

## What?

[Ti.to](https://ti.to/) is a great ticketing and attendee manager service for events both free and paid.

[Szamlazz.hu](https://szamlazz.hu) is a great invoicing service that covers and handles  all Hungarian tax laws regarding invoices.

## Why?

For larger scale events and conferences in Hungary, we have to put certain mediated services (such as catering for example) on the invoice as a separate item.
Tito can't and probably should not handle this.

## How does this work?

This service, deployed on Heroku, sits between Ti.to and Szamlazz.hu. The chain of events are like this:

1. A purchase is made on Tito
2. Tito calls a webhook on the service
3. The service gets all requred data about the purchase from the Tito API
4. The service creates an invoice XML and send it to Szamlazz.hu using [ewngs/szamlazz.js](https://github.com/ewngs/szamlazz.js)

## Caveats

* This service handles purchases that are already paid via Paypal.
* Free tickets, or manually added tickets are ignored
* Sends an email if some error happens
* Uses the Heroku provided Mailgun service to send test and error emails
* Can handle multiple events, check out the contents of `.env.example` and `events.config.js`

## License

MIT License

Copyright (c) 2019 jssc-eu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
