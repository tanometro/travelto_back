const {createUsersLocal, destroyUser, getOneUser, updateUserModel, findAll} = require('../services/users.services');

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

const updateUser = async (req, res) => {
    const {id} = req.params;
    try {
        const response = await updateUserModel(id);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

const readAllUsers = async ()=>{
    try {
        const dbUsers = await findAll();
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

const getUsersById = async (id)=>{
    const {id} = req.params;
    try {
        let usersDB = await getOneUser(id)
        res.status(200).json(usersDB);
        }
    catch (error) {
        res.status(500).send({message: error.message});
    }
};

const getUsersByQuery = async (name)=>{
const dbUsers = await findByName(name);
const users = dbUsers.map(u=>{
    return{
        id: u.id,
        name:[u.name[0],u.name[1]],
        DNI: u.DNI,
        isActive: u.isActiverue,
        roleId: u.roleId
    }
})
return users
};


module.exports = {
    createUsers,
    getUsersById,
    getUsersByQuery,
    readAllUsers,
    deleteUser,
    updateUser
}