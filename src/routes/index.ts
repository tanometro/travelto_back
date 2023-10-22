const attractionsRoutes = require('./attractions.routes');
const express = require('express');
const router = express.Router();

const attractionsRoutes = require('../routes/attractions.routes');
const locationsRoutes = require('./locations.routes');
const usersRoutes = require('./users.routes');
const commentsRoutes = require('./comments.routes');

router.use('/attractions', attractionsRoutes);
router.use('/locations', locationsRoutes);
router.use('/users', usersRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;