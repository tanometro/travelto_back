const { Router } = require('express')
const router = Router()
const { readAttractions, getAttractionById, getAttractionByQuery, createNewAttraction, dataAttraction, deleteOneAttraction } = require('../controllers/attractions.controllers')

router.get('/', readAttractions)
router.get('/data', dataAttraction)
router.get('/name', getAttractionByQuery)
router.get('/:id', getAttractionById)
router.post('/create', createNewAttraction)
//router.delete('/create', createNewAttraction)

module.exports = router