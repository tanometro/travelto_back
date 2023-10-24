const {Attraction} = require('../db');

const createOneAttraction = (body) => {
    try{
        const create = Attraction.create(body);
        return create;
    }
    catch (error) {
        throw new Error ("Mi rey no pude crear la atracción, fijate " + error.message)
    }
}

const findOrCreate = async (data) => {
    try {
        const createdAttractions = await Promise.all(data.attractions.map(async (attractionData) => {
            if (attractionData.hours === null || attractionData.hours == "" ) { attractionData.hours = "0"};
            if (!attractionData.latitude) {attractionData.latitude = "0"};
            if (!attractionData.longitude) {attractionData.longitude = "0"};
    
            const mappedAttraction = {
                name: attractionData.name,
                description: attractionData.description,
                latitude: attractionData.latitude,
                longitude: attractionData.longitude,
                price: attractionData.price,
                hours: attractionData.hours,
                duration: attractionData.duration,
                isActive: attractionData.isActive,
            };
                if (mappedAttraction.hours === null) {
                    mappedAttraction.hours = "0";
                }
    
            const [attraction, created] = await Attraction.findOrCreate({
                where: { name: mappedAttraction.name },
                defaults: mappedAttraction,
            });
            if (!created) {
                await attraction.update(mappedAttraction);
            }
            return attraction;
        }));
    }
    catch(error) {
        throw new Error ("No pude encontrar ni crear la atraccion, fijate que " + error.message)
    }
    
}

const readAllAttraction = () => {
    try {
        const attractions = Attraction.findAll({
            attributes: ['id', 'name', 'website']
        });
        return attractions
    } catch (error) {
        throw new Error ("No pude obtener las atracciones, fijate que " + error.message)
    }
}

const destroyAttraction = (id) => {
    try {
        const destroy = Attraction.destroy({
            where: {
            id: id
            }
        })
        return destroy
    } catch (error) {
        `Bro, no se borró la atracción con ${id}, lo que pasó es que ` + error.message
    }
}

module.exports = {
    createOneAttraction,
    findOrCreate,
    readAllAttraction,
    destroyAttraction
}
