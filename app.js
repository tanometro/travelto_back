const express = require('express')
const server = express()
const cors = require ('cors')
const morgan = require('morgan')
const { conn } = require('./Api/db.js')
require('./Api/db.js')

conn.sync({force: true})
  .then(() => {
    server.listen(3001, () => {
    console.log('Server raised in port: ' + 3001)
    })
  })
  .catch((error) => console.log(error))
