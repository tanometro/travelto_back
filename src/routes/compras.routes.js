const { Router } = require('express')
const router = Router()
const {registroDeCompras, consultaCompra, consultarTodasLasCompras} = require('../controllers/compras.controller')

id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  attractionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cantidadEntradas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },


/**
 * @swagger 
 * components: 
 *   schemas: 
 *     Compra:
 *       type: object
 *       properties: 
 *         usuarioId: 
 *           type: float
 *           description: the user assigns a number to a comment
 *         attractionId: 
 *           type: string
 *           description: the comment properly
 *         cantidadEntradas: 
 *           type: string
 *           description: the comment properly
 *         amount: 
 *           type: string
 *           description: the comment properly
 *         date: 
 *           type: string
 *           description: the comment properly
 *       required:
 *         - rating
 *         - description
 *       example:
 *         rating: 4.5
 *         description: This comment is fabulous
 */

/**
 * @swagger
 * /comments/create:
 *   post:
 *     summary: create a new comment 
 *     tags: [comments]
 *     requestBody: 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       200:
 *         description: new comment created
 */

/**
 * @swagger
 * /comments/{id}:
 *   get:
 *     summary: return a comment
 *     tags: [comments]
 *     parameters: 
 *       - in: path
 *         name: id
 *         schema: 
 *           type: string
 *         required: true
 *         description: the comment id    
 *     responses:
 *       200:
 *         description: obtain a comment 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Comment'
 *       404:
 *         description: comment not found
 */

/**
 * @swagger
 * /comments/delete/{id}:
 *   delete:
 *     summary: delete a comment
 *     tags: [comments]
 *     parameters: 
 *       - in: path
 *         name: id
 *         schema: 
 *           type: string
 *         required: true
 *         description: the comment id    
 *     responses:
 *       200:
 *         description: deleted comment 
 *       404:
 *         description: comment not found
 */

/**
 * @swagger
 * /comments/update/{id}:
 *   put:
 *     summary: update a comment
 *     tags: [comments]
 *     parameters: 
 *       - in: path
 *         name: id
 *         schema: 
 *           type: string
 *         required: true
 *         description: the comment id    
 *     responses:
 *       200:
 *         description: updated comment 
 *       404:
 *         description: comment not found
 */


router.post('/',registroDeCompras)
router.get('/:usuarioId', consultaCompra)
router.get('/', consultarTodasLasCompras)

module.exports = router;