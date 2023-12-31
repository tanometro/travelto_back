const { Router } = require('express')
const router = Router()
const {createLocation, readAllLocations, updateLocation, deleteLocation, readOneLocation, getLocationByQuery} = require('../controllers/locations.controlers');
const { filterLocByCountry } = require('../controllers/filter.controller')

router.get('/name', getLocationByQuery) 
router.get('/:id', readOneLocation);
router.get('/', readAllLocations); 
router.post('/create', createLocation);
router.put('/update/:id', updateLocation) 
router.delete('/delete/:id', deleteLocation); 
router.get('/country/:country', filterLocByCountry) 

/**
 * @swagger 
 * components: 
 *   schemas: 
 *     Location:
 *       type: object
 *       properties: 
 *         country: 
 *           type: string
 *           description: country where the location is
 *         city: 
 *           type: string
 *           description: city where the location is
 *       required:
 *         - country
 *         - city
 *       example:
 *         country: Italia
 *         city: Roma
 */

/**
 * @swagger
 * /locations/create:
 *   post:
 *     summary: create a new location 
 *     tags: [locations]
 *     requestBody: 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Location'
 *     responses:
 *       200:
 *         description: new location created
 */

/**
 * @swagger
 * /locations/:
 *   get:
 *     summary: obtain all locations
 *     tags: [locations]
 *     responses:
 *       200:
 *         description: all locations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Location'
 */

/**
 * @swagger
 * /locations/{id}:
 *   get:
 *     summary: return a location by id
 *     tags: [locations]
 *     parameters: 
 *       - in: path
 *         name: id
 *         schema: 
 *           type: string
 *         required: true
 *         description: the location id    
 *     responses:
 *       200:
 *         description: obtain the location by id 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Location'
 *       404:
 *         description: location not found
 */

/**
 * @swagger 
 * /locations/update/{id}:
 *   put:
 *     summary: update a location
 *     tags: [locations]
 *     parameters: 
 *       - in: path
 *         name: id
 *         schema: 
 *           type: string
 *         required: true
 *         description: the location id    
 *     responses:
 *       200:
 *         description: updated location 
 *       404:
 *         description: location not found
 */

/**
 * @swagger 
 * /locations/delete/{id}:
 *   delete:
 *     summary: delete a location
 *     tags: [locations]
 *     parameters: 
 *       - in: path
 *         name: id
 *         schema: 
 *           type: string
 *         required: true
 *         description: the location id    
 *     responses:
 *       200:
 *         description: deleted location 
 *       404:
 *         description: location not found
 */

/**
 * @swagger 
 * /locations/name:
 *   get:
 *     summary: get locations by name
 *     tags: [locations]
 *     parameters: 
 *       - in: query
 *         name: name
 *         schema: 
 *           type: string
 *         required: true
 *         description: the name of the location    
 *     responses:
 *       200:
 *         description: locations found
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Location'
 */

/**
 * @swagger 
 * /locations/country/{country}:
 *   get:
 *     summary: get locations by country
 *     tags: [locations]
 *     parameters: 
 *       - in: path
 *         name: country
 *         schema: 
 *           type: string
 *         required: true
 *         description: the country of the location    
 *     responses:
 *       200:
 *         description: locations found
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Location'
 */

module.exports = router;
