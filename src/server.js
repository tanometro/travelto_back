const express = require("express");
const routes = require('./routes/index.js');
const morgan = require("morgan");
const cors = require("cors");
const server = express();
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());
server.use(routes);

module.exports = server;