const { createUsersLocal, destroyUser, getOneUser, updateUserModel, readAll, findByName } = require('../services/users.services');

const createUsers = async (req, res) => {
    const { name, dni, email, password } = req.body;
    const roleId = 3;
    const isActive = true;
    console.log(name);
    try {
        if (!name || !dni || !roleId || !email || !password) throw new Error('Faltan datos, revisa tu form');

        const response = await createUsersLocal(name, dni, roleId, email, password, isActive);
        console.log(response);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body
    try {
        const response = await updateUserModel(id, updateData);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const readAllUsers = async (req, res) => {
    try {
        const dbUsers = await readAll();
        res.status(200).json(dbUsers)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await destroyUser(id);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getUsersById = async (req, res) => {
    const { id } = req.params;
    try {
        let usersDB = await getOneUser(id)
        res.status(200).json(usersDB);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const getUsersByQuery = async (req, res) => {
    const { name } = req.query;
    try {
        const dbUsers = await findByName(name);
        res.status(200).json(dbUsers)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }


};


module.exports = {
    createUsers,
    getUsersById,
    getUsersByQuery,
    readAllUsers,
    deleteUser,
    updateUser
}