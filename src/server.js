const express = require("express");
const server = express();
const routes = require('./routes/index.js');
const morgan = require("morgan");
const cors = require("cors");

// Swagger mi rey
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec()

server.use(express.json());
server.use(morgan('dev'));
server.use(cors());
server.use('/', routes);
server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

module.exports = server;