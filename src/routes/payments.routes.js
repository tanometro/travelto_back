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
 *         name: 
 *           type: string
 *           description: name of the attraction
 *         country: 
 *           type: string
 *           description: country where the attraction is
 *         city: 
 *           type: string
 *           description: city where the attraction is
 *         latitude: 
 *           type: string
 *         longitude: 
 *           type: string
 *         price: 
 *           type: number
 *           description: the price of one visit
 *         ranking: 
 *           type: number
 *           description: the media of reviews
 *         hours: 
 *           type: string
 *           description: time when the attraction is open
 *         duration: 
 *           type: string
 *         image:
 *           type: string
 *         isActive:
 *           type: boolean
 *       required:
 *         - name
 *         - country
 *         - city
 *         - latitude
 *         - longitude
 *         - price
 *         - ranking
 *         - hours
 *         - duration
 *       example:
 *         name: Colosseo
 *         country: Italia
 *         city: Roma
 *         latitude: 41°53′25″N
 *         longitude: 12°29′32″E
 *         price: 120
 *         ranking: 4.5
 *         hours: 9:00 am sat
 *         duration: 1.2 hs
 *         image: example.jpg
 *         isActive: true
 */
