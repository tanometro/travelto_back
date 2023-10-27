const { Router } = require('express')
const router = Router()
const {createLocation, readAllLocations, updateLocation, deleteLocation, readOneLocation, getLocationByQuery} = require('../controllers/locations.controlers');

router.post('/create', createLocation);
router.get('/', readAllLocations);
router.patch('/update/:id', updateLocation)
router.delete('/delete/:id', deleteLocation);
router.get('/:id', readOneLocation);
router.get('/:name', getLocationByQuery)

module.exports = router;