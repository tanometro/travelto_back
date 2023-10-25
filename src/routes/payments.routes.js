import {Router} from 'express';
const {createOrder, successOrder, webhook} = require('../controllers/payments.controllers')

const router = Router();

router.get('/createOrder', createOrder);
router.get('/success', successOrder);
router.get('/webhook', webhook);

export default router;
