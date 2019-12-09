module.exports = (event, order) => {

  const { email } = event

  return { // everyting is optional
    // bank: {
    //   name: 'Test Bank <name>',
    //   accountNumber: '11111111-11111111-11111111'
    // },
    email
  }
}
