const { Router } = require('express')
const router = Router()
const { readAllAttraction, readAttractionById,readAttractionByQuery, createNewAttraction, updateAttraction, deleteAttraction } = require('../controllers/attractions.controllers')
const { filterAtracByCity, OrderByPrice } = require('../controllers/filter.controller')

/**
 * @swagger 
 * components: 
 *  schemas: 
 *      Attraction:
 *          type: object
 *          properties: 
 *              name: 
 *                  type: string
 *                  description: name of the attraction
 *              country: 
 *                  type: string
 *                  descripcion: country where the attraction is
 *              city: 
 *                  type: string
 *                  descripcion: city where the attraction is
 *              latitude: 
 *                  type: string
 *              longitude: 
 *                  type: string
 *              price: 
 *                  type: number
 *                  descripcion: the price of one visit
 *              ranking: 
 *                  type: number
 *                  descripcion: the media of reviews
 *              hours: 
 *                  type: string
 *                  descripcion: time when the attraction is open
 *              duration: 
 *                  type: string
 *              image:
 *                  type: string
 *              isActive:
 *                  type: boolean
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
 * /attractions/create
 *  post:
 *      summary: create a new attraction 
 *      tags: [attractions]
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Attraction'
 *      responses:
 *          200:
 *              description: new attraction created
 */

/**
 * @swagger
 * /attractions/
 *  get:
 *      summary: obtain all attractions
 *      tags: [attractions]
 *      responses:
 *          200:
 *              description: all attractions
 *              content:
 *                  application/json
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Attraction'
 *          
 */

/**
 * @swagger
 * /attractions/{id}
 *  get:
 *      summary: return an attraction
 *      tags: [attractions]
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
 *              description: obtain all attractions 
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Attraction'
 *          404:
 *              description: attraction not found
 */

/**
 * @swagger
 * /attractions/update/{id}
 *  put:
 *      summary: delete an attraction
 *      tags: [attractions]
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
 *              description: deleted attraction 
 *          404:
 *              description: attraction not found
 */

/**
 * @swagger
 * /attractions/delete/{id}
 *  delete:
 *      summary: delete an attraction
 *      tags: [attractions]
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
 *              description: deleted attraction 
 *          404:
 *              description: attraction not found
 */


// router.get('/data', dataAttraction);
router.get('/name', readAttractionByQuery);


router.get('/orderByPrice', OrderByPrice)
router.get('/:id', readAttractionById);

router.get('/', readAllAttraction);
router.post('/create', createNewAttraction);
router.put('/update/:id', updateAttraction);
router.delete('/delete/:id', deleteAttraction);

router.get('/city/:city', filterAtracByCity)


module.exports = router