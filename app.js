const express = require('express')

const app = express()
const port = process.env.PORT || 3000;

app.use('/customer-api', require('./api/customers/customerController'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})