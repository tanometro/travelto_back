const { Router } = require('express')
const router = Router()
const { getUsersById, getUsersByQuery, readAllUsers, deleteUser, updateUser, registerUser } = require('../controllers/users.controllers')

router.post('/create', registerUser)
// router.post('/create', createUsers);
router.get('/', readAllUsers);
router.get('/name', getUsersByQuery);
router.get('/:id', getUsersById)
router.delete('/delete/:id', deleteUser);
router.patch('/update/:id', updateUser)

module.exports = router;