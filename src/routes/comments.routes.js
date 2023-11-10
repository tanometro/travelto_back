const { Router } = require('express')
const router = Router()
const {createOneComment,readAllComment, readOneComment, updateOneComment, deleteOneComment} = require('../controllers/comments.controllers')

router.post('/create', createOneComment);
router.get('/', readAllComment);
router.patch('/update/:id', updateOneComment)
router.delete('/delete/:id', deleteOneComment);
router.get('/:id', readOneComment)

/**
 * @swagger 
 * components: 
 *   schemas: 
 *     Comment:
 *       type: object
 *       properties: 
 *         rating: 
 *           type: float
 *           description: the user assigns a number to a comment
 *         description: 
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

module.exports = router;