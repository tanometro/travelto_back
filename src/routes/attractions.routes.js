const { Router } = require('express')
const router = Router()
const { getAllAttraction, getAttractionById,getAttractionByQuery, createNewAttraction, dataAttraction } = require('../controllers/attractions.controllers')

router.get('/', getAllAttraction)
router.get('/data', dataAttraction)
router.get('/name', getAttractionByQuery)
router.get('/:id', getAttractionById)
router.post('/create', createNewAttraction)
//router.delete('/create', createNewAttraction)

module.exports = router