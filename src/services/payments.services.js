 const axios = require("axios");
const {Payment} = require('../db')

const paymentService = async (details) => {
    const url = "https://api.mercadopago.com/checkout/preferences";
    const {id, title, currency_id, description, quantity,
    unit_price, payerName, payerSurname, payerEmail, identification} = details;
    const body = {
          items: [
            {
                id: id,
                title: title,
                currency_id: currency_id,
                picture_url: 'https://www.mercadopago.com/org-img/MP3/home/logomp3.gif',
                description: description,
                quantity: quantity,
                unit_price: unit_price
            }
          ],
          payer: {
            name: payerName,
            surname: payerSurname,
            email: payerEmail,
            identification: {
                type: DNI,
                number: identification.number,
            },
          back_urls: {
            failure: "/failure",
            pending: "/pending",
            success: "/success"
          }
        }
    }
        const payment = await axios.post(url, body, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
          }
        });
    
        return payment.data;
      }
module.exports = paymentService;
