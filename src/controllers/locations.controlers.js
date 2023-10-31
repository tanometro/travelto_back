const data = require('../../Api/Locations.json')
const {bulkLocation,getAllLocations, destroyOneLocation, createOneLocation, findOneLocationService, updateLocationService, findByName} = require('../services/locations.services');

const dataLocal = async (req, res) => {
    try {
      const response = await bulkLocation(data.locations);
      res.status(200).json(response);
    } catch (error) {
      console.error("Error en la inserción de ubicaciones en la base de datos:", error);
      res.status(500).json({ error: "Error en el servidor" });
    }
};

const readAllLocations = async (req, res) => {
    try{
        const response = await getAllLocations();
        res.status(200).json(response)
    }
    catch (error) {
        res.status(500).send({message: error.message});
    }
}

const readOneLocation = async (req, res) =>{
    try {
        const {id} = req.params;
        const response = await findOneLocationService(id);

        if (response) {
            res.status(200).json(response);
          } else {
            res.status(404).json({ error: "Ubicación no encontrada" });
          }
    } catch (error) {
        console.error("Error al buscar ubicación por ID:", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
}

const getLocationByQuery = async (req, res) => {
    try {
      const { lugar } = req.query;
      const locations = await findByName(lugar);
  
      if (locations.length > 0) {
        res.status(200).json(locations);
      } else {
        res.status(404).json({
          error: "No se encontraron ubicaciones con el nombre o país proporcionado",
        });
      }
    } catch (error) {
      console.error("Error al buscar ubicaciones por nombre en la base de datos:", error);
      res.status(500).json({ error: "Error en el servidor" });
    }
  };


  const createLocation = async (req, res) => {
    try {
      const newLocationData = req.body;
      const newLocation = await createOneLocation(newLocationData);
      res.status(201).json(newLocation);
    } catch (error) {
      console.error("Error en la creación de una ubicación:", error);
      res.status(500).json({ error: "Error en el servidor" });
    }
  };

const updateLocation = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
        const response = await updateLocationService(id, updateData); 
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteLocation = async (req, res) => {
    const {id} = req.params;
    
    try {
        const result = await destroyOneLocation(id)
        if (result) {
            res.status(204).send('Location deleted');
          } else {
            res.status(404).json({ error: `No se encontró la ubicación con ID ${id}` });
          }
    }
    catch (error){
        res.status(500).json({ error: `Error al eliminar la atracción: ${error.message}` });
    }
}

module.exports = {
    dataLocal,
    createLocation, 
    readAllLocations,
    readOneLocation,
    updateLocation,
    deleteLocation,
    getLocationByQuery
}