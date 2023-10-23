const {createLocation, readAllLocations, updateLocation, deleteLocation, readOneLocation} = require('../controllers/locations.controlers');

router.post('/create', createLocation);
router.get('/', readAllLocations);
router.patch('/update/:id', updateLocation)
router.patch('/delete/:id', deleteLocation);
router.get('/:id', readOneLocation)

module.exports = router;