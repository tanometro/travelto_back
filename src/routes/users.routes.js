const {Router} = require('express')
const useAttractions = Router();
const handlerAttractionById = require('../handlers/handlerAttractionById')
const handlerAttractionByQuery = require('../handlers/handlerAttractionByQuery')
const handlerCreateAttracction = require('../handlers/handlerCreateAttracction')
const handlerUsersById = require('../handlers/handlerUsersById')
const handlerUserByQuery = require('../handlers/handlerUserByQuery')
const handlerCreateUser = require('../handlers/handlerCreateUser')

useUsers.get('/id', handlerUsersById);
useUsers.get('/',handlerUserByQuery);
useUsers.post('/', handlerCreateUser);

module.exports = useUsers;
useAttractions.get('/id', handlerAttractionById);
useAttractions.get('/', handlerAttractionByQuery);
useAttractions.post('/', handlerCreateAttracction);

module.exports = useAttractions;