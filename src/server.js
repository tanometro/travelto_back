const express = require("express");
const server = express();
const routes = require('./routes/index.js');
const morgan = require("morgan");
//const cors = require("cors");
const mercadopago = require('mercadopago');
const path = require('path');
const { BASE_URL, ACCESS_TOKEN } = process.env;

server.use(express.urlencoded({ extended: false }))
server.use(express.json());
server.use(morgan('dev'));
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

server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

mercadopago.configure({
  access_token: ACCESS_TOKEN
});

  server.post("/create_preference", (req, res) => {

    let preference = {
      items: [
        {
          id: req.body.id,
          title: req.body.description, 
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity),

        },
      ],
      payer: {
        name: req.body.payerName,
        surname: req.body.payerSurname,
        email: req.body.payerEmail,
        identification: {
            type: 'DNI',
            number: req.body.identification.number,
        },
      back_urls: {
        success: "http://localhost:3001",
        failure: "http://localhost:3001",
        pending: "",
      },
      auto_return: "approved",
    }
  }
  
    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        res.json({
          id: response.body.id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  
  server.get("/feedback", function (req, res) {
    res.json({
      Payment: req.query.payment_id,
      Status: req.query.status,
      MerchantOrder: req.query.merchant_order_id,
    });
  });


module.exports = server;
