const { Router } = require('express')
const router = Router()
const {createOneComment,readAllComment, readOneComment, updateOneComment, deleteOneComment} = require('../controllers/comments.controllers')
/**
 * @swagger 
 * components: 
 *  schemas: 
 *      Comment:
 *          type: object
 *          properties: 
 *              rating: 
 *                  type: float
 *                  description: the user asign a number to a comment
 *              description: 
 *                  type: string
 *                  descripcion: the comment properly
 *          required:
 *              - rating
 *              - description
 *          example:
 *              - 4.5
 *              - This comment fabulous
 * 
 */

/**
 * @swagger //
 * /comments/create:
 *  post:
 *      summary: create a new comment 
 *      tags: [comments]
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Comments'
 *      responses:
 *          200:
 *              description: new comment created
 */

/**
 * @swagger
 * /comments/{id}:
 *  get:
 *      summary: return a comment
 *      tags: [comments]
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
 *              description: obtain all c 
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/comments'
 *          404:
 *              description: comment not found
 */

/**
 * @swagger
 * /comments/delete/{id}:
 *  delete:
 *      summary: delete an comment
 *      tags: [comments]
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
 *              description: deleted comment 
 *          404:
 *              description: comment not found
 */

/**
 * @swagger
 * /comments/update/{id}:
 *  put:
 *      summary: delete an comment
 *      tags: [comments]
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
router.post('/create', createOneComment);
router.get('/', readAllComment);
router.patch('/update/:id', updateOneComment)
router.delete('/delete/:id', deleteOneComment);
router.get('/:id', readOneComment)

module.exports = router;