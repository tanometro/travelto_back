const {AttractionsModel} = require('../db');
import { CreateAttractionInterface } from "../../interfaces";

const createOneAttraction = (body: CreateAttractionInterface) => {
    try{
        const create = AttractionsModel.create(body);
        return create;
    }
    catch (error: any) {
        throw new Error ("Mi rey no pude crear la atracción, fijate " + error.message)
    }
}

