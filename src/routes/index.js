const express = require('express');
const router = express.Router();

const attractionsRoutes = require('./attractions.routes');
const locationsRoutes = require('./locations.routes');
const usersRoutes = require('./users.routes');
const commentsRoutes = require('./comments.routes');
const paymentsRoutes = require('./payments.routes');
const loginRoutes = require('./login.routes');
const comprasRoutes = require('./compras.routes')

router.use('/attractions', attractionsRoutes);
router.use('/locations', locationsRoutes);
router.use('/users', usersRoutes);
router.use('/comments', commentsRoutes);
router.use('/payments', paymentsRoutes);
router.use('/login', loginRoutes)
router.use('/compras', comprasRoutes)
module.exports = router;



