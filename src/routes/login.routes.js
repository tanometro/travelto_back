const { Router } = require('express')
const router = Router()
const {loginFunction}= require('../controllers/login.controller')
const { authenticateUser } = require('../controllers/auth.controllers')

router.post('/', loginFunction);

module.exports = router;