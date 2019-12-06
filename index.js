
'use strict'
require('dotenv').config()

const { PORT = 8000 } = process.env
const express = require('express')
const bodyParser = require('body-parser')
const validateTito = require('./middlewares/tito-validate')
const validateRequest = require('./middlewares/request-validate')
const app = express()

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())

app.use((err, req, res, next) => {
  if (err.isBoom) {
    res
      .status(err.output.statusCode)
      .send(err.output.payload.message)

    return;
  }

  next(err)
})

app.post('/register-purchase', validateRequest, validateTito, function (req, res) {
  console.log(req.body);

  res.send('ok')
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
