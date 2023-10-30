const { Router } = require('express')
const router = Router()
const { readAllAttraction, readAttractionById,readAttractionByQuery, createNewAttraction, dataAttraction } = require('../controllers/attractions.controllers')

router.get('/', readAllAttraction)
router.get('/data', dataAttraction)
router.get('/name', readAttractionByQuery)
router.get('/:id', readAttractionById)
router.post('/create', createNewAttraction)
//router.delete('/create', createNewAttraction)

module.exports = router