const { Router } = require('express')
const router = Router()
const {registroDeCompras, consultaCompra, consultarTodasLasCompras} = require('../controllers/compras.controller')

/**
 * @swagger 
 * components: 
 *   schemas: 
 *     Compra:
 *       type: object
 *       properties: 
 *         usuarioId: 
 *           type: integer
 *           description: the user ID that buy the item/s
 *         attractionId: 
 *           type: integer
 *         cantidadEntradas: 
 *           type: integer
 *         amount: 
 *           type: decimal
 *           description: the total amount of the transaction
 *         date: 
 *           type: date
 *       required:
 *         - usuarioID
 *         - attractionId
 *         - cantidadEntradas
 *         - amount
 *       example:
 *         usuarioId: 7
 *         attractionId: 3
 *         cantidadEntradas: 1
 *         amount: 23$
 *         date: 2023/07/12
 */

/**
 * @swagger
 * /compras:
 *   post:
 *     summary: register a new transaction 
 *     tags: [compras]
 *     requestBody: 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Compra'
 *     responses:
 *       200:
 *         description: new transaction created
 *       500:
 *         description: new transaction failed
 */


/**
 * @swagger
 * /compras/{usuarioId}:
 *   get:
 *     summary: return all transactions of a user 
 *     tags: [compras]
 *     parameters: 
 *       - in: path
 *         name: id
 *         schema: 
 *           type: string
 *         required: true
 *         description: the user id    
 *     responses:
 *       200:
 *         description: obtain all transactions of a user 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Compra'
 *       500:
 *         description: transactions not found
 */

/**
 * @swagger
 * /compras/:
 *   get:
 *     summary: obtain all transactions
 *     tags: [compras]
 *     responses:
 *       200:
 *         description: all transactions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Compra'
 */


router.post('/',registroDeCompras)
router.get('/:usuarioId', consultaCompra)
router.get('/', consultarTodasLasCompras)

module.exports = router;