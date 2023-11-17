const { Router } = require('express')
const router = Router()
const { registerUser, getUsersById, getUsersByQuery, readAllUsers, deleteUser, updateUser } = require('../controllers/users.controllers');
const { authenticateUser } = require('../controllers/auth.controllers');


router.post('/create', registerUser)
// router.post('/create', createUsers);
router.get('/', readAllUsers);
router.get('/name', getUsersByQuery);
router.get('/:id', [authenticateUser], getUsersById)
router.delete('/delete/:id', deleteUser);
router.patch('/update/:id', [authenticateUser], updateUser)

module.exports = router;