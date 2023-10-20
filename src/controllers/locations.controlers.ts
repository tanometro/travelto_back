const {getAllLocations, destroyOneLocation, createOneLocation, findOneLocationService, updateLocationService} = require('../services/locations.services');
// Para todas las locations

const createLocation = async (req, res) => {
    try {
        const created = await createOneLocation();
    } catch (error) {
        
    }
}

const readAllLocations = async (req, res) => {
    try{
        const response = await getAllLocations();

        res.status(200).json(response)
    }
    catch (error) {
        res.status(500).send({message: error.message});
    }
}

const updateLocation = async (req, res) => {
    const {id} = req.params;
    const updateData = req.body;
    try {
        const response = await updateLocationService(updateData);
        res.status(200).json({ message: response });
    }
    catch (error) {
        res.status(500).send({message: error.message});
    }
}

const deleteLocation = async (req, res) => {
    const {id} = req.params;
    try {
        const response = await destroyOneLocation(id);
        res.status(200).json(response)
    }
    catch (error){
        res.status(500).send({message: error.message});
    }
}


const readOneLocation = async (req, res) =>{
    const response = await findOneLocationService();
}