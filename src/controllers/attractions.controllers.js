const { Attraction } = require("../db");
const data = require("../../Api/attractions.json");
const {bulkAttraction, readAttractions, attractionById,attractionByQuery, createOneAttraction} = require('../services/atractions.services')

const dataAttraction = async (req, res) => {
  try {
    const response = await bulkAttraction(data.attractions);
    res.status(200).json(response);
  } catch (error) {
    console.error(
      "Error en la inserción de atracciones en la base de datos:",
      error
    );
    res.status(500).json({ error: "Error en el servidor" });
  }
};

const getAllAttraction = async (req, res) => {
  try {
    const dbAttractions = await readAttractions();
    res.status(200).json(dbAttractions);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "Error" });
    }
  }
};

const getAttractionById = async (req, res) => {
  try {
    const { id } = req.params;
    const attraction = await attractionById(id);

    if (attraction) {
      res.status(200).json(attraction);
    } else {
      res.status(404).json({ error: "Atracción no encontrada" });
    }
  } catch (error) {
    console.error("Error al buscar atracción por ID:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

const getAttractionByQuery = async(req, res) => {
  try {
    const { name } = req.query; // Obtén el parámetro 'name' de la consulta
    const attractions = await attractionByQuery(name);

    if (attractions.length > 0) {
      res.status(200).json(attractions);
    } else {
      res.status(404).json({
        error: "No se encontraron atracciones con el nombre proporcionado",
      });
    }
  } catch (error) {
    console.error("Error al buscar atracciones por nombre en la base de datos:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

const createNewAttraction = async (req, res) => {
  try {
    const newAttraction = await createOneAttraction(req.body);
    res.status(201).json(newAttraction);
  } catch (error) {
    console.error("Error en la creación de una atracción:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};


module.exports = {
  dataAttraction,
  getAllAttraction,
  getAttractionById,
  getAttractionByQuery,
  createNewAttraction,
};
