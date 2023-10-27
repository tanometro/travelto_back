const { Router } = require('express')
const router = Router()
const {dataLocal,createLocation, readAllLocations, updateLocation, deleteLocation, readOneLocation, getLocationByQuery} = require('../controllers/locations.controlers');
const { filterLocByCountry } = require('../controllers/filter.controller')

router.get('/data', dataLocal)
router.get('/name', getLocationByQuery)
router.get('/:id', readOneLocation);
router.get('/', readAllLocations);
router.post('/create', createLocation);
router.put('/update/:id', updateLocation)
router.delete('/delete/:id', deleteLocation);

router.get('/country/:country', filterLocByCountry)

module.exports = router;