const { Router } = require('express')
const router = Router()
const { readAllAttraction, readAttractionById,readAttractionByQuery, createNewAttraction, dataAttraction, updateAttraction, deleteAttraction } = require('../controllers/attractions.controllers')

router.get('/data', dataAttraction);
router.get('/name', readAttractionByQuery);
router.get('/:id', readAttractionById);
router.get('/', readAllAttraction);
router.post('/create', createNewAttraction);
router.put('/update/:id', updateAttraction);
router.delete('/delete/:id', deleteAttraction);


module.exports = router