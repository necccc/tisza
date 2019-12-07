
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
app.use(bodyParser.json())

app.post('/register-purchase', validateRequest, validateTito, function (req, res) {
  console.log(req.body);

  res.send('ok')
})

app.use((err, req, res, next) => {
  if (err.isBoom) {
    console.error(`${err.output.statusCode} ${err.output.payload.message}`)
    res
      .status(err.output.statusCode)
      .send(err.output.payload.message)

    return;
  }

  next(err)
})


app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
