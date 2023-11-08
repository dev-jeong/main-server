const express = require('express')

const app = express()
const port = process.env.PORT || 3000;

app.use('/user-api', require('./Users/userController'));
app.use('/board-api', require('./Boards/boardController'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})