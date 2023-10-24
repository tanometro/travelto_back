import { Request, Response } from 'express'
const { Attractions } = require('../models/Attractions')
const {createOneAttraction} = require('../services/atractions.services');

const createAttraction = async (body) => {
    try {
        const newAttraction = await createOneAttraction(body);
        return newAttraction
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Error en la creacion de la nueva attraction' + error.message)
        } else {
            throw new Error('Error desconocido en la creación de la nueva atracción.')
        }
    }
};

// const { Attractions } = require('../models')
const data = require('../../Api/data')

const getAttractionById = async (id, source) => {

    if (source === 'API') {
        let attraction = data.filter((a) => a.id === id)
        return attraction
    } else {
        let attractionDB = await Attractions.findPK(id)
        return attractionDB
    }
};

const getAttractionByQuery = async (name) => {
    //DATA BASE
    const dbAttraction = await Attractions.findAll({ where: { name: name } })
    const attraction = dbAttraction.map((a) => {
        return {
            id: a.id,
            name: a.name,
            isActive: a.isActive,
            hours: a.hours,
            location: a.location,
            coordinates: a.coordinates,
            price: a.price,
            duration: a.duration,
            description: a.description
        }
    })
};
const getAllAttraction = async (req, res) => {
    try {
        const dbAttractions = await Attractions.findAll();
        const attractionsData = data;

        const allAttraction = [...dbAttractions, ...attractionsData]
        const nombreBuscado = (req.query.name || '').toString().toLocaleLowerCase()

        const filteredAttractions = allAttraction.filter((attraction) => {
            const nameAttraction = attraction.name.toLocaleLowerCase()
            return nameAttraction.includes(nombreBuscado)
        })

        res.status(200).json(filteredAttractions)
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(400).json({ error: 'Error' })
        }
    }
}

module.exports = {
    getAttractionById,
    createAttraction,
    getAllAttraction,
    getAttractionByQuery,
}