const { Router } = require('express')
const router = Router()
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


module.exports = router