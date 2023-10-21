const express = require('express');
const router = express.Router()

router.post('/', createLocation);
router.get('/search/:id', readAllLocations);
router.patch('/', updateLocation)
router.patch('/', deleteLocation);
router.get('/', readOneLocation)

module.exports = router;