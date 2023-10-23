const { getAllAttraction, getAttractionById, getAttractionByQuery, createAttraction } = require('../controllers/attractions.controllers')

router.get('/', getAllAttraction)
router.get('/name', getAttractionByQuery)
router.get('/:id', getAttractionById)
router.post('/create', createAttraction)

module.exports = router