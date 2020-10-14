import sendMail from './lib/send-mail'
import createErrorMessage from './lib/create-error-email';

export default async (message, error, request = null) => {
  await sendMail(
    message,
    request ? createErrorMessage(error, request.body) : error
  );
  console.log(error);
}
