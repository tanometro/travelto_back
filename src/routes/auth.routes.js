const { Router } = require('express')
const router = Router()
const {auth} = require('../controllers/auth.controllers')

router.post('/auth', auth);