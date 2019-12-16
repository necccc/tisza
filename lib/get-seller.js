module.exports = (event, order) => {

  const { email, bank } = event

  return { // everyting is optional
    bank,
    email
  }
}
