const { Router } = require('express');
const {createOrder, successOrder, receiveWebhook} = require('../controllers/payments.controllers')

const router = Router();

router.post('/createOrder', createOrder);
router.get('/success', successOrder);
// router.get('/pending', pending);
// router.get('/failure', failure);
router.get('/webhook', receiveWebhook);

module.exports = router;

/**
 * @swagger 
 * components: 
 *   schemas: 
 *     Payment:
 *       type: object
 *       properties: 
 *         currency_id: 
 *           type: number
 *           description: id of the currency, 1 = Peso, 2 = US Dollar
 *         picture_url: 
 *           type: string
 *           description: It's always 'https://www.mercadopago.com/org-img/MP3/home/logomp3.gif'
 *         description: 
 *           type: string
 *           description: description of the transaction
 *         quantity: 
 *           type: number
 *         unit_price: 
 *           type: number
 *         payerName: 
 *           type: string
 *         surname: 
 *           type: string
 *         email: 
 *           type: string
 *         identification: 
 *           type: string
 *           description: array con tipo ( = DNI, CI, Pasaporte ) y número de documento
 *       required:
 *         - currency_id
 *         - picture_url
 *         - quantity
 *         - unit_price
 *         - payerName
 *         - surname
 *         - identification
 *       example:
 *         currency_id: 1
 *         picture_url: 'https://www.mercadopago.com/org-img/MP3/home/logomp3.gif'
 *         description: The entire museum experience
 *         quantity: 10
 *         unit_price: 200
 *         payer_name: Carlitos Nicolás
 *         surname: JavaBro
 *         email: carlitosjs@henry.com
 *         identificación: {DNI, 36555444}
 */


