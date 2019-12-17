const YAML = require('yaml')

const safeLog = (error) => {
  const message = YAML.stringify(
    JSON.parse(JSON.stringify(error))
  )
  return message.replace(/token=.*$/gm,'REDACTED')
}

module.exports = (registration, error) => {
  const message = `
API call error: ${error.isAxiosError}
Error: ${error.message}

Webhook logs:
      https://api.tito.io/${registration.event.account_slug}/${registration.event.slug}/webhooks

Event: ${registration.event.slug}
Reference: ${registration.reference}
Created at: ${registration.created_at}

Billing info:
  ${registration.billing_address.company_name}
  ${registration.billing_address.vat_number}
  ${registration.billing_address.address}
  ${registration.billing_address.city}
  ${registration.billing_address.country_name}

Total: ${registration.total}

-------------------------------------------------------------

Complete error log:

${safeLog(error)}
`

  return message
}
