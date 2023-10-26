const { Router } = require('express')
const router = Router()
const { getAllAttraction, getAttractionById,getAttractionByQuery, createNewAttraction, dataAttraction } = require('../controllers/attractions.controllers')

router.get('/data', dataAttraction)
router.get('/', getAllAttraction)
router.get('/:id', getAttractionById)
router.get('/name', getAttractionByQuery)
router.post('/create', createNewAttraction)
//router.delete('/delete', createNewAttraction)

module.exports = router