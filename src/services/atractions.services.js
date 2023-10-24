const {AttractionsModel} = require('../db');

const createOneAttraction = (body) => {
    try{
        const create = AttractionsModel.create(body);
        return create;
    }
    catch (error) {
        throw new Error ("Mi rey no pude crear la atracción, fijate " + error.message)
    }
}

