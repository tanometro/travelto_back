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

module.exports = handlerAttractionById;