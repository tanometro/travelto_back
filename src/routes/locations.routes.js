const { Router } = require('express')
const router = Router()
const {createLocation, readAllLocations, updateLocation, deleteLocation, readOneLocation} = require('../controllers/locations.controlers');

router.post('/create', createLocation);
router.get('/', readAllLocations);
router.patch('/update/:id', updateLocation)
router.delete('/delete/:id', deleteLocation);
router.get('/:id', readOneLocation)

module.exports = router;