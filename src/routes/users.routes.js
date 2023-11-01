const { Router } = require('express')
const router = Router()
const {registerUser,createUsers, getUsersById, getUsersByQuery, readAllUsers, deleteUser, updateUser} = require('../controllers/users.controllers')

router.post('/register', registerUser)
router.post('/create', createUsers);
router.get('/', readAllUsers);
router.get('/name', getUsersByQuery);
router.get('/:id', getUsersById)
router.delete('/delete/:id', deleteUser);
router.patch('/update/:id', updateUser)

module.exports = router;