const {Attractions} = require('../models/Attractions')

const createAttraction = async (name, hours, location, coordinates, price, duration, description, isActive)=>{

    try {
        const newAttraction = await Attractions.create({name, hours, location, coordinates, price, duration, description, isActive})
        return newAttraction
    } catch (error) {
        throw new Error('Error en la creacion de la nueva attraction' + error.message)
    }
};


module.exports = createAttraction