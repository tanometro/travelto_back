const { Location } = require('../db');
const { Op } = require('sequelize');

const bulkLocation = async (locations) => {
    try {
      const mappedLocations = locations.map(locationData => ({
        city: locationData.city,
        country: locationData.country,
      }));
      const insertedLocations = await Location.bulkCreate(mappedLocations);
  
      return insertedLocations;
    } catch (error) {
      throw new Error("No se pudieron insertar las ubicaciones en la base de datos: " + error.message);
    }
  };

  const getAllLocations = async () => {
    try{
        const locations = await Location.findAll({
                attributes: ['id', 'city', 'country']
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

        if (oneLocation) {
            return (oneLocation) 
        }  else {
           return (null)
        }
    } catch (error) {
        throw new Error ("Idolo, yo no seré el mejor backend, pero vos tampoco. Intenta de nuevo. " + error.message)
    }
}

const findByName = async (lugar) => {
    try {
      if (!lugar) {
        throw new Error('Falta el parámetro de consulta "lugar"');
      }
  
      const response = await Location.findAll({
        where: {
          [Op.or]: [
            { city: { [Op.iLike]: `%${lugar.toLowerCase()}%` } },
            { country: { [Op.iLike]: `%${lugar.toLowerCase()}%` } },
          ],
        },
      });
  
      return response;
    } catch (error) {
      throw new Error("Error al buscar ubicaciones por nombre en la base de datos: " + error.message);
    }
  };

  const createOneLocation = async (data) => {
    try {
        const newLocation = await Location.create({
            city: data.city,
            country: data.country,
        });
        return newLocation;
    } catch (error) {
        throw new Error("No se pudo crear la ubicación: " + error.message);
    }
}

const updateLocationService = async (id, updateData) => {
    try {
        if (!id) {
            throw new Error('Se requiere un ID válido');
          }
          const [updatedCount] = await Location.update(updateData, {
            where: {
              id: id,
            },
          });
      
          if (updatedCount === 0) {
            throw new Error(`No se encontró una ubicación con ID ${id}`);
          }
      
          return { message: 'ubicación actualizada exitosamente' };
    } catch (error) {
        throw new Error(`No se pudo actualizar la ubicación con ID ${id}. Detalles: ${error.message}`);
    }
};

const destroyOneLocation = async (id) => {
    try {
        const location = await Location.findByPk(id)
        if (!location) {
            throw new Error(`No existe la ubicación con ID ${id}`);
          }
        const result = await location.destroy()
        return result
    }
    catch (error){
        throw new Error (`Bro, no se borró la ubicación con ${id}, lo que pasó es que ` + error.message)
    }
}

module.exports = {
    bulkLocation,
    createOneLocation,
    getAllLocations,
    findOneLocationService,
    destroyOneLocation,
    updateLocationService,
    findByName
}
