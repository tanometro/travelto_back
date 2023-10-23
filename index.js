const express = require('express')

const server = express();
const { conn } = require('./src/db')
require('./src/db');

conn.sync({force: true})
  .then(() => {
    server.listen(3001, () => {
      console.log('Server raised in port: ' + 3001);
    });
  })
  .catch((error) => console.log(error));


