const { Router } = require('express')
const router = Router()
const { readAllAttraction, readAttractionById,readAttractionByQuery, createNewAttraction, dataAttraction } = require('../controllers/attractions.controllers')

/**
 * @swagger 
 * components: 
 *  schemas: 
 *      Attractions:
 *          type: object
 *          propertys: 
 *              name: 
 *                  type: string
 *                  description: username
 *  
 */
router.get('/data', dataAttraction);
router.get('/name', readAttractionByQuery);
router.get('/:id', readAttractionById);
router.get('/', readAllAttraction);
router.post('/create', createNewAttraction);
//router.delete('/delete', createNewAttraction)

module.exports = router