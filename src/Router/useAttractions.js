const {Router} = require('express')
const useAttractions = Router();
const handlerAttractionById = require('../handlers/handlerAttractionById')
const handlerAttractionByQuery = require('../handlers/handlerAttractionByQuery')
const handlerCreateAttracction = require('../handlers/handlerCreateAttracction')



useAttractions.get('/id', handlerAttractionById);
useAttractions.get('/', handlerAttractionByQuery);
useAttractions.post('/', handlerCreateAttracction);

module.exports = useAttractions;