
const crypto = require('crypto')

const json = JSON.stringify({"event": {"slug": "reinforce2020"}})
const hmac = crypto
    .createHmac('sha256', 'zYz-KhRmGavcLXdQQddCAg')
    .update(`{"event": {"slug": "reinforce2020"}}`)
    .digest('base64');


    console.log(hmac)
