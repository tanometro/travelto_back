const { Attraction, Location } = require('../db');
const { Op } = require('sequelize');


const bulkAttraction = async (attractions) => {
    try {
      const mappedAttractions = attractions.map(attractionData => ({
        name: attractionData.name,
        city: attractionData.city,
        country: attractionData.country,
        description: attractionData.description,
        image: attractionData.image,
        latitude: attractionData.latitude,
        longitude: attractionData.longitude,
        price: attractionData.price,
        ranking: attractionData.ranking,
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
          attributes: ['id','name','description', 'latitude', 'longitude','price','hours','duration','ranking', 'image', 'isActive'],
          include: {
            model: Location,
            attributes: ["city", "country"],
          }
        });
        console.log(dbAttractions)
        return dbAttractions;
      } catch (error) {
        throw new Error("No pude obtener las atracciones: " + error.message);
      }
    };

    const attractionById = async (id) => {
        try {
          const attractionDB = await Attraction.findByPk(id, {
            attributes: {
              exclude: ["isActive"],
            },
          });
      
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
          description,
          latitude,
          longitude,
          price,
          hours,
          ranking,
          duration,
          image,
          isActive,
          location,
        } = data;
        if (!name || !latitude || !longitude || !price || !ranking || !duration 
          ||!image || !hours || !description) {
          throw new Error("Faltan campos obligatorios");
        }
        const newAttraction = await Attraction.create({
          name,
          location,
          ranking,
          description,
          latitude,
          longitude,
          price,
          hours,
          duration,
          image,
          isActive,
          });
      
          // Asociar la atracción con la ubicación encontrada
          await newAttraction.setLocation(location);
      
          return newAttraction;
        } catch (error) {
          throw new Error("Error en la creación de una atracción: " + error.message);
        }
      };
      
      
      
    const updateAttractionModel = async (id, updateData) => {
      try {
        if (!id) {
          throw new Error('Se requiere un ID válido');
        }
    
        const [updatedCount] = await Attraction.update(updateData, {
          where: {
            id: id,
          },
        });
    
        if (updatedCount === 0) {
          throw new Error(`No se encontró una atracción con ID ${id}`);
        }
    
        return { message: 'Atracción actualizada exitosamente' };
      } catch (error) {
        throw new Error(`Error al actualizar la atracción con ID ${id}: ${error.message}`);
      }
    };
    
    const destroyAttraction = async (id) => {
      try {
        const attraction = await Attraction.findByPk(id);
    
        if (!attraction) {
          throw new Error(`No existe la atracción con ID ${id}`);
        }
    
        const result = await attraction.destroy();
        return result;
      } catch (error) {
        throw new Error(`No se pudo eliminar la atracción con ID ${id}: ${error.message}`);
      }
    };
    

module.exports = {
    bulkAttraction,
    readAttractions,
    attractionById,
    attractionByQuery,
    createOneAttraction,
    updateAttractionModel,
    destroyAttraction,
}
