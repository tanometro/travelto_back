const express = require("express");
const server = express();
const routes = require('./routes/index.js');
const morgan = require("morgan");
//const cors = require("cors");
const mercadopago = require('mercadopago');
const {BASE_URL}= process.env;
const path = require('path');

// Swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'TravelTo docs API',
            version: '1.0.0',  
        },
        servers: [
            {
                url: `${BASE_URL}`
            }
        ]
    },
    apis: [`${path.join(__dirname, './routes/*.js')}`]
};

server.use(express.urlencoded({ extended: false }))
server.use(express.json());
server.use(morgan('dev'));

server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
//server.use(cors());
server.use('/', routes);
server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

module.exports = server;
