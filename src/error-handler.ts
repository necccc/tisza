import sendMail from './lib/send-mail'
import createErrorMessage from './lib/create-error-email';

export default async (message, error, request = null) => {
  console.log(error);
  await sendMail(
    message,
    request ? createErrorMessage(request.body, error) : error
  );
}
