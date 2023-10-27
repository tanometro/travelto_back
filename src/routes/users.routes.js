const { Router } = require('express')
const router = Router()
const {createUsers, getUsersById, getUsersByQuery, readAllUsers, deleteUser, updateUser} = require('../controllers/comments.controllers')

router.post('/create', createUsers);
router.get('/', readAllUsers);
router.get('/:id', getUsersById)
router.delete('/delete/:id', deleteUser);
router.get('/name', getUsersByQuery);
router.patch('/patch', updateUser)

module.exports = router;