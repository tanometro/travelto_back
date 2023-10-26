const { Attraction } = require('../db');
const { Op, fn, col } = require('sequelize');

const bulkAttraction = async (attractions) => {
    try {
      const mappedAttractions = attractions.map(attractionData => ({
        name: attractionData.name,
        description: attractionData.description,
        latitude: attractionData.latitude,
        longitude: attractionData.longitude,
        price: attractionData.price,
        hours: attractionData.hours || "0",
        duration: attractionData.duration,
        isActive: attractionData.isActive,
      }));
      const insertedAttractions = await Attraction.bulkCreate(mappedAttractions);
  
      return insertedAttractions;
    } catch (error) {
      throw new Error("No pude insertar atracciones en la base de datos: " + error.message);
    }
  };

  const readAttractions = async () => {
    try {
        const dbAttractions = await Attraction.findAll({
          attributes: ['id', 'name'],
        });
        return dbAttractions;
      } catch (error) {
        throw new Error("No pude obtener las atracciones: " + error.message);
      }
    };

    const attractionById = async (id) => {
        try {
          const attractionDB = await Attraction.findByPk(id);
      
          if (attractionDB) {
            return attractionDB;
          } else {
            return null;
          }
        } catch (error) {
          throw new Error("Error al buscar atracción por ID en la base de datos: " + error.message);
        }
      };

  const attractionByQuery = async (name) => {
        try {
          if (!name) {
            throw new Error('Falta el parámetro de consulta "name"');
          }
          const attractions = await Attraction.findAll({
            where: {
              name: { [Op.iLike]: `%${name.toLowerCase()}%` }
            }
          });
          return attractions;
        } catch (error) {
          throw new Error("Error al buscar atracciones por nombre en la base de datos: " + error.message);
        }
      };

const createOneAttraction = async (data) => {
    try {
        const {
          name,
          hours,
          latitude,
          longitude,
          price,
          duration,
          description,
          isActive,
          location,
        } = data;
        if (!name || !latitude || !longitude || !price || !duration) {
          throw new Error("Faltan campos obligatorios");
        }
        const newAttraction = await Attraction.create({
            name,
            hours,
            latitude,
            longitude,
            price,
            duration,
            description,
            isActive,
          });
          if (location) {
            await newAttraction.setLocation(location);
          }
    
        return newAttraction;
      } catch (error) {
        throw new Error("Error en la creación de una atracción: " + error.message);
      }
    };
    const updateAttractionModel = (id, updateData) => {
      try {
        const response = Attraction.update(updateData, {
            where: {
                id: id
            }
        })
        id(!id) ('No existe ese id')
        return response;
    } catch (error) {
        (`No se pudo editar la attraction con id ${id}` + error.message)
    }
    }
    const destroyAttraction = (id) => {
        try {
            const destroy = Attraction.destroy({
                where: {
                id: id
                }
            })
            return destroy
        } catch (error) {
            `Bro, no se borró la atracción con ${id}, lo que pasó es que ` + error.message
        }
    }

module.exports = {
    bulkAttraction,
    readAttractions,
    attractionById,
    attractionByQuery,
    createOneAttraction,
    updateAttractionModel,
    destroyAttraction,
}
