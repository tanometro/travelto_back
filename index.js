const port = 3001;

const server = require('./src/server');
const { conn } = require('./src/db')
require('./src/db');

conn.sync({force: true})
  .then(() => {
    server.listen(port, () => {
      console.log(`Server raised in port: ` + port);
    });
  })
  .catch((error) => console.log(error));


