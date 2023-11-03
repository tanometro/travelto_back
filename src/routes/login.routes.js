const { Router } = require('express')
const router = Router()
const loginFunction = require('../controllers/login.controller')
const {authenticateUser} = require('../controllers/auth.controllers')

router.post('/', [authenticateUser], loginFunction);

module.exports = router;