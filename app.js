const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('password generator !')
})

app.listen(port, () => {
  console.log(`Click :http://localhost:3000 }`)
})