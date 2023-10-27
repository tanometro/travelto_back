const {Location} = require('../db');

const createOneLocation = async (data) => {
    try {
        const newLocation = await Location.create(data);
        return newLocation;
    } catch (error) {
        throw new Error ("Mostro, no pude crear la location, y es que " + error.message)
    }
}

const getAllLocations = async () => {
    try{
        const locations = await Location.findAll({
                attributes: ['id', 'name', 'website']
        });
        return locations
    }
    catch (error) {
        throw new Error ("Fua bro, hubo un error en buscar todas las locaciones, lo que pasó es que " + error.message)
    }
}

const findOneLocationService = async (id) => {
    try {
        const oneLocation = await Location.findByPk(id);
        if (oneLocation === null) return ("No existe esa locación")
        return oneLocation;
    } catch (error) {
        throw new Error ("Idolo, yo no seré el mejor backend, pero vos tampoco. Intenta de nuevo. " + error.message)
    }
}

const updateLocationService = async (id, updatedData) => {
    try {
        const result = await Location.update(updatedData, {
            where: { id: id },
        });

        if (result[0] === 0) {
            throw new Error(`No se encontró ninguna locación con ID ${id} para actualizar.`);
        }

        return `Pa, la ubicación con ID ${id} fue actualizada exitosamente.`;
    } catch (error) {
        throw new Error(`No se pudo actualizar la ubicación con ID ${id}. Detalles: ${error.message}`);
    }
};

const destroyOneLocation = async (id) => {
    try {
        const deleteCount = await Location.destroy({
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
const findByName = async (name) => {
    try {
        const response = await Location.findAll({
            where: {
                name: name
            }})
    } catch (error) {
        throw new Error (error.message)
    }
}
module.exports = {
    createOneLocation,
    getAllLocations,
    findOneLocationService,
    destroyOneLocation,
    updateLocationService,
    findByName
}
