const { Router } = require('express')
const router = Router()
const {registroDeCompras, consultaCompra, consultarTodasLasCompras} = require('../controllers/compras.controller')

router.post('/',registroDeCompras)
router.get('/:usuarioId', consultaCompra)
router.get('/', consultarTodasLasCompras)

module.exports = router;