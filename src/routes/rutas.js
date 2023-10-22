const {Router} = require('express')
const router = Router();
const useAttractions = require('../Router/useAttractions')
const useUsers= require('../Router/useUsers')

router.use('/attractions', useAttractions)
router.use('/users',useUsers)