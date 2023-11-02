const { register, destroyUser, getOneUser, updateUserModel, readAll, findByName } = require('../services/users.services');

const registerUser = async (req, res) => {
    try {
        const { name, dni, image, email, password, roleID } = req.body;

        // Validación de datos
        if (!name || !dni || !image || !email || !password) {
            return res.status(400).json({ message: "Por favor, proporciona todos los campos requeridos." });
        }
        const result = await register(name, dni, image, email, password, roleID);

        if (result.error) {
            return res.status(400).json({ message: result.error });
        }

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


<<<<<<< HEAD
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
=======
  const readAllUsers = async (req, res)=>{
>>>>>>> 644784704f1f7c3f04120be26746d4d068376e67
    try {
        const dbUsers = await readAll();
        res.status(200).json(dbUsers)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

<<<<<<< HEAD
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
=======
>>>>>>> 644784704f1f7c3f04120be26746d4d068376e67

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

<<<<<<< HEAD
const getUserLog = async (req, res) => {
    const { email, password } = req.body;
    try {
        const dbUsers = await findByEmailAndPassword(email, password);
        console.log(dbUsers);
        res.status(200).json(dbUsers)
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
=======
const updateUser = async (req, res) => {
    const {id} = req.params;
    const updateData = req.body
    try {
        const response = await updateUserModel(id, updateData);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
>>>>>>> 644784704f1f7c3f04120be26746d4d068376e67

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
//! -------------------------------------------------------------------------
// const createUsers = async (req, res)=>{
//     const {name, dni, roleId, email,password, isActive,image } = req.body;
//     try {
//         if (!name || !dni || !roleId || !email || !password ) 'Faltan datos, revisa tu form';

//         const response = await createUsersLocal(name, dni, roleId, email,password, isActive, image);
//         res.status(200).json(response);
//     } catch (error) {
//         res.status(500).send({message: error.message});
//     }
// };
module.exports = {
    registerUser,
    // createUsers,
    getUsersById,
    getUsersByQuery,
    readAllUsers,
    deleteUser,
    updateUser,
    getUserLog
}