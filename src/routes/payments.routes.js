import {Router} from 'express';
const {createOrder, successOrder, receiveWebhook} = require('../controllers/payments.controllers')

const router = Router();

router.post('/createOrder', createOrder);
router.get('/success', successOrder);
router.get('/pending', pending);
router.get('/failure', failure);
router.get('/webhook', receiveWebhook);

export default router;
