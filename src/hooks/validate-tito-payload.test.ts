process.env.TITO_TOKEN_RF = "abcd1234"

import validateTitoPayload from './validate-tito-payload'
import crypto from 'crypto';

const reply = {
  badRequest: jest.fn(),
  notAcceptable: jest.fn()
}

const payloadMissingEvent = { foo: "bar" }
const payloadEvent = { foo: "bar", event: { slug: 'reinforce2020' }}

describe('tito payload validation', () => {

  beforeEach(() => {
    reply.badRequest.mockClear()
    reply.notAcceptable.mockClear()
  });

  test('validate missing event payload', () => {
    validateTitoPayload({headers: {'tito-signature': "foo" }, body: payloadMissingEvent }, reply)

    expect(reply.badRequest).toHaveBeenCalledTimes(1);
  });

  test('validate event payload with hash mismatch', () => {
    validateTitoPayload({
      headers: {'tito-signature': "foo" },
      body: payloadEvent,
      rawBody: JSON.stringify(payloadEvent)
    }, reply)

    expect(reply.notAcceptable).toHaveBeenCalledTimes(1);
  });


  test('validate event payload with proper hash', () => {
    const hmac = crypto
      .createHmac('sha256', process.env.TITO_TOKEN_RF)
      .update(JSON.stringify(payloadEvent))
      .digest('base64');

    validateTitoPayload({
      headers: {'tito-signature': hmac },
      body: payloadEvent,
      rawBody: JSON.stringify(payloadEvent)
    }, reply)

    expect(reply.badRequest).toHaveBeenCalledTimes(0);
    expect(reply.notAcceptable).toHaveBeenCalledTimes(0);
  });


});
