const { Router } = require('express')
const router = Router()
const { createUsers, getUsersById, getUsersByQuery, readAllUsers, deleteUser, updateUser, getUserLog } = require('../controllers/users.controllers')

router.post('/create', createUsers);
router.post('/log', getUserLog)
router.get('/', readAllUsers);
router.get('/name', getUsersByQuery);
router.get('/:id', getUsersById)
router.delete('/delete/:id', deleteUser);
router.patch('/update/:id', updateUser)

module.exports = router;