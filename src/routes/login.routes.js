const { Router } = require('express')
const router = Router()
const {loginFunction}= require('../controllers/login.controller')

router.get('/', loginFunction);

module.exports = router;