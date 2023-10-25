const {mp} = require('../../node_modules/mercadopago');
const BASE_URL = process.env;
const createOrder = async (req, res) => {
    mp.configure({
        access_token: 'TEST-6038187742372110-102514-6594233da784d61a0cfb946bf617e92e-1524801602',
    })

    const response = await mp.preferences.create({
        items: [

        ],
        back_urls: {
            success: `${BASE_URL}/success`,
            pending: `${BASE_URL}/pending`,
            failure: `${BASE_URL}/webhook`
    },
    notification_url: 'traveltoback-production.up.railway.app/webhook'
    })
    res.status(200).send('Orden creada')
}

const successOrder = (req, res) => {
    res.status(200).send('Orden exitosa')
}

const receiveWebhook = (req, res) => {
    res.status(200).send('Orden exitosa')
}

module.exports = {
    createOrder, successOrder, receiveWebhook
}
