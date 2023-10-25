const { Router } = require('express')
const router = Router()
const { getAllAttraction, getAttractionById, getAttractionByQuery, createNewAttraction, dataAttraction, deleteOneAttraction } = require('../controllers/attractions.controllers')

router.get('/data', dataAttraction)
router.get('/', getAllAttraction)
router.get('/name', getAttractionByQuery)
router.get('/:id', getAttractionById)
router.post('/create', createNewAttraction)
//router.delete('/create', createNewAttraction)

module.exports = router