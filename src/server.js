const express = require("express");
const server = express();
const routes = require('./routes/index.js');
const morgan = require("morgan");
const cors = require("cors");
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
server.use(cors());
server.use('/', routes);
server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

module.exports = server;
