const { Router } = require('express')
const router = Router()
<<<<<<< HEAD
const { readAllAttraction, readAttractionById,readAttractionByQuery, createNewAttraction, dataAttraction } = require('../controllers/attractions.controllers')

router.get('/', readAllAttraction)
router.get('/data', dataAttraction)
router.get('/name', readAttractionByQuery)
router.get('/:id', readAttractionById)
router.post('/create', createNewAttraction)
//router.delete('/create', createNewAttraction)
=======
const { readAllAttraction, readAttractionById,readAttractionByQuery, createNewAttraction, dataAttraction, updateAttraction, deleteAttraction } = require('../controllers/attractions.controllers')
const { filterAtracByCity, OrderByPrice } = require('../controllers/filter.controller')

router.get('/data', dataAttraction);
router.get('/name', readAttractionByQuery);


router.get('/orderByPrice', OrderByPrice)
router.get('/:id', readAttractionById);

router.get('/', readAllAttraction);
router.post('/create', createNewAttraction);
router.put('/update/:id', updateAttraction);
router.delete('/delete/:id', deleteAttraction);

router.get('/city/:city', filterAtracByCity)

>>>>>>> 857e588f2faff7033a2cffe54ec833f527ef633e

module.exports = router