const { Router } = require('express')
const router = Router()
const { loginFunction } = require('../controllers/login.controller')

router.post('/', loginFunction);

module.exports = router;