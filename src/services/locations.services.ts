const {Op, literal} = require('sequelize');
const {LocationsModel} = require('../../Api/db');
import { CreateLocationData } from "../../interfaces";

const createOneLocation = async (data: CreateLocationData) => {
    try {
        const newLocation = await LocationsModel.create(data);
    } catch (error) {
        throw new Error ("Mostro, no pude crear la location, y es que " + error.message)
    }
}

const getAllLocations = async () => {
    try{
        const locations = await LocationsModel.findAll({
                attributes: ['id', 'name', 'website']
        });
        return locations
    }
    catch (error) {
        throw new Error ("Fua bro, hubo un error en buscar todas las locaciones, lo que pasó es que " + error.message)
    }
}

const findOneLocationService = async (id: Number) => {
    try {
        const oneLocation = await LocationsModel.findByPk(id);
        if (oneLocation === null) return ("No existe esa locación")
        return oneLocation;

    } catch (error) {
        throw new Error ("Idolo, yo no seré el mejor backend, pero vos tampoco. Intenta de nuevo. " + error.message)
    }
}

const destroyOneLocation = async (id: Number) => {
    try {
        const deleteCount = await LocationsModel.destroy({
            where: {
                id: id
            }
        });
        if (deleteCount === 0) {
            throw new Error(`No se encontró ninguna ubicación con ID ${id} para borrar.`);
        }
        return `Ubicación con ID ${id} eliminada exitosamente.`;
    }
    catch (error){
        throw new Error (`Bro, no se borró la location con ${id}, lo que pasó es que ` + error.message)
    }
}

module.exports = {
    createOneLocation,
    getAllLocations,
    findOneLocationService,
    destroyOneLocation,
}
