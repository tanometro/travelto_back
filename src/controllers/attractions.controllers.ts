const {Attractions} = require('../models/Attractions')

const createAttraction = async (name, hours, location, coordinates, price, duration, description, isActive)=>{

    try {
        const newAttraction = await Attractions.create({name, hours, location, coordinates, price, duration, description, isActive})
        return newAttraction
    } catch (error) {
        throw new Error('Error en la creacion de la nueva attraction' + error.message)
    }
};

const {Attractions} = require('../models')
const data = require('../Falsa API/data')

const getAttractionById = async (id, source)=>{
if(source ==='API'){
    let attraction = data.filter(a => a.id === id)
    return attraction
}else{
    let attractionDB = await Attractions.findPK(id)
    return attractionDB
}
};

const getAttractionByQuery = async(name)=>{
    //DATA BASE
const dbAttraction = await Attractions.findAll({where: {name: name}}) 
const attraction= dbAttraction.map(a => {
    return{
        id: a.id,
        name: a.name,
        isActive: a.isActive,
        hours: a.hours,
        location: a.location,
        coordinates:a.coordinates,
        price: a.price,
        duration: a.duration,
        description: a.description
    }
})
    //FALSA API
const apiAttractions = getAllAttraction();
const nombreBuscado = name.toLowerCase();
const filtradoByName= apiAttractions.filter((a)=>{
    const nombreAttraction = a.name.toLowerCase();
    return nombreAttraction === nombreBuscado
})
return [...filtradoByName,...attraction]
};

const getAllAttraction = async ()=>{

    try {
        const dbAttractions = await Attractions.findAll();
        const attractionsData = data;

        return [...dbAttractions, ...attractionsData]
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}