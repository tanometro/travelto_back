const {readAttractions, attractionById,attractionByQuery, createOneAttraction, updateAttractionModel,destroyAttraction} = require('../services/atractions.services')


const readAllAttraction = async (req, res) => {
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

const readAttractionById = async (req, res) => {
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

const readAttractionByQuery = async(req, res) => {
  try {
    const { name } = req.query;
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

const updateAttraction = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const response = await updateAttractionModel(id, updateData);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAttraction = async (req, res) => {
  const { id } = req.params;
  
  try {
    const result = await destroyAttraction(id);
    if (result) {
      res.status(204).send('Attracction deleted');
    } else {
      res.status(404).json({ error: `No se encontró la atracción con ID ${id}` });
    }
  } catch (error) {
    res.status(500).json({ error: `Error al eliminar la atracción: ${error.message}` });
  }
};



module.exports = {
  createNewAttraction,
  readAllAttraction,
  readAttractionById,
  readAttractionByQuery,
  updateAttraction,
  deleteAttraction,
};
