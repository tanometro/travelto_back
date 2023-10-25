const { Attraction } = require("../db");
const data = require("../../Api/attractions.json");
const {findOrCreate, getAllAttraction} = require('../services/atractions.services')

const dataAttraction = async () => {
  try {
    const response = await findOrCreate(data);
    res.status(200).send(response);
  } catch (error) {
    console.error(
      "Error en la creación o actualización de atracciones:",
      error
    );
  }
};

const getAttractionById = async (req, res) => {
  try {
    const { id } = req.params;
    const source = "API";

    if (source === "API") {
      const attraction = data.attractions.find((a) => a.id === Number(id));
      if (attraction) {
        return res.status(200).json(attraction);
      } else {
        return res.status(404).json({ error: "Atracción no encontrada" });
      }
    } else {
      const attractionDB = await Attraction.findByPk(id);
      if (attractionDB) {
        return res.status(200).json(attractionDB);
      } else {
        return res
          .status(404)
          .json({ error: "Atracción no encontrada en la base de datos" });
      }
    }
  } catch (error) {
    console.error("Error al buscar atracción por ID:", error);
    return res.status(500).json({ error: "Error en el servidor" });
  }
};

const getAttractionByQuery = (req, res) => {
  try {
    const { name } = req.query; // Obtén el parámetro 'name' de la consulta

    if (!name) {
      return res
        .status(400)
        .json({ error: 'Falta el parámetro de consulta "name"' });
    }

    // Realiza la búsqueda en tu fuente de datos (el archivo JSON)
    const attractions = data.attractions.filter((a) => a.name === name);

    if (attractions.length > 0) {
      return res.status(200).json(attractions);
    } else {
      return res
        .status(404)
        .json({
          error: "No se encontraron atracciones con el nombre proporcionado",
        });
    }
  } catch (error) {
    console.error("Error al buscar atracciones por nombre:", error);
    return res.status(500).json({ error: "Error en el servidor" });
  }
};
const readAttractions = async (req, res) => {
  try {
    const dbAttractions = await getAllAttraction(); 
    const attractionsData = data.attractions; 
   
    const allAttraction = [...dbAttractions, ...attractionsData];
    const nombreBuscado = (req.query.name || "").toString().toLocaleLowerCase();

    const filteredAttractions = allAttraction.filter((attraction) => {
      const nameAttraction = attraction.name.toLocaleLowerCase();
      return nameAttraction.includes(nombreBuscado);
    });

    res.status(200).json(filteredAttractions);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "Error" });
    }
  }
};
const createNewAttraction = async (req, res) => {
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
    } = req.body;

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

    newAttraction.addLocation(location);
    res.status(201).json(newAttraction);
  } catch (error) {
    res.status(400).json({ error: "Error en la creacion de una Attraccion" });
  }
};
module.exports = {
  getAttractionById,
  dataAttraction,
  createNewAttraction,
  getAllAttraction,
  readAttractions,
};
