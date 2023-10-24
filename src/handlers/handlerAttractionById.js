const {getAttractionById} = require('../controllers/getAttraction'); 

const handlerAttractionById = async (req, res)=>{
const {id}=req.params;
const source =isNaN(id) ? 'BDD' : 'API';
try {
    const attraction = await getAttractionById(id, source)
    res.status(200).json(attraction);
} catch (error) {
    res.status(400).json({error: 'error en el handler' + error.message})
}
}

const handlerAttractionByQuery = async (req, res)=>{
    const {name} = req.query;
    try {
        const sourceName = name ? await getAttractionByQuery(name) : getAllAttraction();
        res.status(200).json(sourceName)
    } catch (error) {
        res.status(400).json({error: 'error en el handler de query' + error.message})
    }
    }

const handlerCreateAttracction = async (req, res)=>{
    const {name, isActive, hours, location,coordinates, price, duration, description} = req.body;    
        try {
            if(!name || !hours || !location || !coordinates || !price || !duration || !description){
                throw new Error ('Completar con los datos necesarios')
            } else {
                const newAttraction =await createAttraction(name, hours, location, coordinates, price, duration, description, isActive);
                res.status(200).json(newAttraction)
            }
        } catch (error) {
            res.status(400).json({error: 'hay un error en el handler de creacion' + error.message})
        }
        }

module.exports = handlerAttractionById;