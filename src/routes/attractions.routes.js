const { Router } = require('express')
const router = Router()
const { readAllAttraction, readAttractionById,readAttractionByQuery, createNewAttraction, updateAttraction, deleteAttraction } = require('../controllers/attractions.controllers')
const { filterAtracByCity, OrderByPrice } = require('../controllers/filter.controller')

router.get('/name', readAttractionByQuery);
router.get('/orderByPrice', OrderByPrice)
router.get('/:id', readAttractionById);
router.get('/', readAllAttraction);
router.post('/create', createNewAttraction);
router.put('/update/:id', updateAttraction);
router.delete('/delete/:id', deleteAttraction);
router.get('/city/:city', filterAtracByCity)

/**
 * @swagger 
 * components: 
 *   schemas: 
 *     Attraction:
 *       type: object
 *       properties: 
 *         name: 
 *           type: string
 *           description: name of the attraction
 *         country: 
 *           type: string
 *           description: country where the attraction is
 *         city: 
 *           type: string
 *           description: city where the attraction is
 *         latitude: 
 *           type: string
 *         longitude: 
 *           type: string
 *         price: 
 *           type: number
 *           description: the price of one visit
 *         ranking: 
 *           type: number
 *           description: the media of reviews
 *         hours: 
 *           type: string
 *           description: time when the attraction is open
 *         duration: 
 *           type: string
 *         image:
 *           type: string
 *         isActive:
 *           type: boolean
 *       required:
 *         - name
 *         - country
 *         - city
 *         - latitude
 *         - longitude
 *         - price
 *         - ranking
 *         - hours
 *         - duration
 *       example:
 *         name: Colosseo
 *         country: Italia
 *         city: Roma
 *         latitude: 41°53′25″N
 *         longitude: 12°29′32″E
 *         price: 120
 *         ranking: 4.5
 *         hours: 9:00 am sat
 *         duration: 1.2 hs
 *         image: example.jpg
 *         isActive: true
 */
/**
 * @swagger
 * /attractions/create:
 *   post:
 *     summary: create a new attraction
 *     tags: [attractions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Attraction'
 *     responses:
 *       200:
 *         description: new attraction created
 */

/**
 * @swagger
 * /attractions/:
 *   get:
 *     summary: obtain all attractions
 *     tags: [attractions]
 *     responses:
 *       200:
 *         description: all attractions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Attraction'
 */

/**
 * @swagger
 * /attractions/{id}:
 *   get:
 *     summary: return an attraction
 *     tags: [attractions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the attraction id
 *     responses:
 *       200:
 *         description: obtain all attractions
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Attraction'
 *       404:
 *         description: attraction not found
 */

/**
 * @swagger
 * /attractions/update/{id}:
 *   put:
 *     summary: update an attraction
 *     tags: [attractions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the attraction id
 *     responses:
 *       200:
 *         description: updated attraction
 *       404:
 *         description: attraction not found
 */

/**
 * @swagger
 * /attractions/delete/{id}:
 *   delete:
 *     summary: delete an attraction
 *     tags: [attractions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: the attraction id
 *     responses:
 *       200:
 *         description: deleted attraction
 *       404:
 *         description: attraction not found
 */

/**
 * @swagger
 * /attractions/name:
 *   get:
 *     summary: get attractions by name
 *     tags: [attractions]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: the name of the attraction
 *     responses:
 *       200:
 *         description: attractions found
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Attraction'
 */

/**
 * @swagger
 * /attractions/orderByPrice:
 *   get:
 *     summary: get attractions ordered by price
 *     tags: [attractions]
 *     responses:
 *       200:
 *         description: attractions ordered by price
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Attraction'
 */

/**
 * @swagger
 * /attractions/city/{city}:
 *   get:
 *     summary: get attractions by city
 *     tags: [attractions]
 *     parameters:
 *       - in: path
 *         name: city
 *         schema:
 *           type: string
 *         required: true
 *         description: the city of the attraction
 *     responses:
 *       200:
 *         description: attractions found
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Attraction'
 */

module.exports = router