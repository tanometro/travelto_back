const {Users} = require('../models/Users')
const {createUsersLocal, destroyUser, getOneUser} = require('../services/users.services');

const createUsers = async (req, res)=>{
    const {name, dni, roleId} = req.body;
    try {
        if (!name || !dni || !roleId) 'Faltan datos, revisa tu form';

        const response = await createUsersLocal(name, dni, roleId);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

const getUsersById = async (id, source)=>{
    const {id} = req.params;
    try {
        if(source ==='API'){
            let users = data.filter(a => a.id === id)
            res.status(200).json(users);
        }else{
            let usersDB = await getOneUser(id)
            res.status(200).json(usersDB);
        }        
    } catch (error) {
        res.status(500).send({message: error.message});
    }  
};

const getUsersByQuery = async (name)=>{
//DATA BASE
const dbUsers = await Users.findAll({where: {name: name}})
const users = dbUsers.map(u=>{
    
    return{
        id: u.id,
        name:[u.name[0],u.name[1]],
        DNI: u.DNI,
        isActive: u.isActiverue,
        roleId: u.roleId
    }
})
//FALSA API
const apiUsers = getAllUsers();
nombreBuscado= name.toLowerCase();
const filtradoByName= apiUsers.filter((u)=>{
    const nombreUser = u.name.toLowerCase();
    return nombreUser === nombreBuscado
})
return [...filtradoByName, ...users]
};

const getAllUsers = async ()=>{
    try {
        const dbUsers = await Users.findAll();
        const usersData = data;

        return [...dbUsers, ...usersData]
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try{
        const response = await destroyUser(id);
        res.status(200).json(response);
    }
    catch(error) {
        res.status(500).send({message: error.message});
    }
}

module.exports = {
    createUsers,
    getUsersById,
    getUsersByQuery,
    getAllUsers,
    deleteUser
}