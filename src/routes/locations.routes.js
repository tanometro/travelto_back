const { Router } = require('express')
const router = Router()
const {dataLocal,createLocation, readAllLocations, updateLocation, deleteLocation, readOneLocation, getLocationByQuery} = require('../controllers/locations.controlers');
const { filterLocByCountry } = require('../controllers/filter.controller')

/**
 * @swagger 
 * components: 
 *  schemas: 
 *      Location:
 *          type: object
 *          properties: 
 *              country: 
 *                  type: string
 *                  descripcion: country where the location is
 *              city: 
 *                  type: string
 *                  descripcion: city where the location is
 *              
 *          required:
 *              - name
 *              - country
 *              - city
 *              - latitude
 *              - longitude
 *              - price
 *              - ranking
 *              - hours
 *              - duration
 *          example:
 *              - Colosseo
 *              - Italia
 *              - Roma
 *              - 41°53′25″N
 *              - 12°29′32″E
 *              - 120 €
 *              - 4.5/5
 *              - 9:00 am sat
 *              - 1.2 hs
 * 
 */

/**
 * @swagger
 * /locations/create
 *  post:
 *      summary: create a new location 
 *      tags: [locations]
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/locations'
 *      responses:
 *          200:
 *              description: new location created
 */

/**
 * @swagger
 * /locations/
 *  get:
 *      summary: obtain all locations
 *      tags: [locations]
 *      responses:
 *          200:
 *              description: all locations
 *              content:
 *                  application/json
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/locations'
 *          
 */

/**
 * @swagger
 * /locations/{id}
 *  get:
 *      summary: return an location
 *      tags: [locations]
 *      parameters: 
 *          -   in: path
 *              name: id
 *              schema: 
 *              type:
 *                  string
 *              required: true
 *              description: the user id    
 *      responses:
 *          200:
 *              description: obtain all locations 
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/locations'
 *          404:
 *              description: location not found
 */

/**
 * @swagger
 * /locations/update/{id}
 *  put:
 *      summary: delete an location
 *      tags: [locations]
 *      parameters: 
 *          -   in: path
 *              name: id
 *              schema: 
 *              type:
 *                  string
 *              required: true
 *              description: the user id    
 *      responses:
 *          200:
 *              description: deleted location 
 *          404:
 *              description: location not found
 */

/**
 * @swagger
 * /locations/delete/{id}
 *  delete:
 *      summary: delete an location
 *      tags: [locations]
 *      parameters: 
 *          -   in: path
 *              name: id
 *              schema: 
 *              type:
 *                  string
 *              required: true
 *              description: the user id    
 *      responses:
 *          200:
 *              description: deleted location 
 *          404:
 *              description: location not found
 */

// router.get('/data', dataLocal)
router.get('/name', getLocationByQuery)
router.get('/:id', readOneLocation);
router.get('/', readAllLocations);
router.post('/create', createLocation);
router.put('/update/:id', updateLocation)
router.delete('/delete/:id', deleteLocation);

router.get('/country/:country', filterLocByCountry)

module.exports = router;