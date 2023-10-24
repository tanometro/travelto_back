const { Router } = require('express')
const router = Router()
const {createUsers, getUsersById, getUsersByQuery, getAllUsers, deleteUser} = require('../controllers/comments.controllers')

router.post('/create', createUsers);
router.get('/', getAllUsers);
router.get('/:id', getUsersById)
router.delete('/delete/:id', deleteUser);
router.get('/name', getUsersByQuery)

module.exports = router;
