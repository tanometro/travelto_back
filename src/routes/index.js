const express = require('express');
const router = express.Router();


const loginFunction = require('../routes/Login')
const attractionsRoutes = require('./attractions.routes');
const locationsRoutes = require('./locations.routes');
const usersRoutes = require('./users.routes');
const commentsRoutes = require('./comments.routes');
const paymentsRoutes = require('./payments.routes')

router.use('/attractions', attractionsRoutes);
router.use('/locations', locationsRoutes);
router.use('/users', usersRoutes);
router.use('/comments', commentsRoutes);
router.use('/payments', paymentsRoutes);

router.use('/login',loginFunction)
module.exports = router;



