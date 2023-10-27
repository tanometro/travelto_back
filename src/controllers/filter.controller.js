const attractionService = require('../services/atractions.services')
const locationService = require('../services/locations.services')
const { Attraction } = require('../db')

const filterAtracByCity = async (req, res) => {
    try {
      const { city } = req.params; 
      const attractionsInCity = await attractionService.readAttractions();
      const lowercaseCity = city.toLowerCase();
      const filteredAttractions = attractionsInCity.filter(attraction => attraction.city.toLowerCase() === lowercaseCity);
      res.status(200).json(filteredAttractions);
    } catch (error) {
      res.status(500).json({ error: 'Error al filtrar atracciones por ciudad.' });
    }
  };

const filterLocByCountry = async(req, res) => {
    try{
        const { country } = req.params
        const locationInCountry = await locationService.getAllLocations()
        const lowercaseCountry = country.toLowerCase()
        const filteredLocations = locationInCountry.filter(location => location.country.toLowerCase() === lowercaseCountry)
        res.status(200).json(filteredLocations) 
    }
    catch(error){
        res.status(500).json({error: 'Error al filtrar ubicaciones por pais.'})
    }
}

const OrderByPrice = async (req, res) => {
    try {
        const { order } = req.query;
    
        if (order !== 'asc' && order !== 'desc') {
          return res.status(400).json({ error: 'Parámetro de orden no válido. Use "asc" o "desc".' });
        }
        const orderDirection = order === 'asc' ? 'ASC' : 'DESC';
        const attractions = await Attraction.findAll({
          order: [['price', orderDirection]],
        });
    
        res.status(200).json(attractions);
      } catch (error) {
        console.error('Error al ordenar atracciones por precio:', error);
        res.status(500).json({ error: 'Error al ordenar atracciones por precio.' });
      }
    };

module.exports = {
    filterAtracByCity,
    filterLocByCountry,
    OrderByPrice
}