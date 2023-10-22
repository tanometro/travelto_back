const createAttraction = require('../controllers/createAttraction');


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

module.exports= handlerCreateAttracction