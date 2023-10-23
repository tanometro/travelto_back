import { Request, Response } from 'express';
const {getAllLocations, destroyOneLocation, createOneLocation, findOneLocationService, updateLocationService} = require('../services/locations.services');
// Para todas las locations

const createLocation = async (req: Request, res: Response) => {
    try {
        const created = await createOneLocation();
        res.status(200).json(created)
    } catch (error: any) {
        res.status(500).send({message: error.message});
    }
}

const readAllLocations = async (req: Request, res: Response) => {
    try{
        const response = await getAllLocations();
        res.status(200).json(response)
    }
    catch (error: any) {
        res.status(500).send({message: error.message});
    }
}

const readOneLocation = async (req: Request, res: Response) =>{
    const {id} = req.params;
    try {
        const response = await findOneLocationService(id);
        res.status(200).json(response)
    } catch (error: any) {
        res.status(500).send({message: error.message});
    }
}

const updateLocation = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const response = await updateLocationService(Number(id), updateData); 
        res.status(200).json({ message: response });
    } catch (error: any) {
        res.status(500).send({ message: error.message });
    }
}


const deleteLocation = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const response = await destroyOneLocation(id);
        res.status(200).json(response)
    }
    catch (error: any){
        res.status(500).send({message: error.message});
    }
}

module.exports = {
    createLocation, 
    readAllLocations,
    readOneLocation,
    updateLocation,
    deleteLocation
}