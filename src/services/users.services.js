const {User} = require('../db');

const createUsersLocal = (body) => {
    try {
        const create = User.create(body);
        return create;
    } catch (error) {
        throw new Error ('No se pudo crear el user ' + error.message)
    }
}

const destroyUser = (id) => {
    try {
        const response = User.destroy({
            where: {
                id: id
            }
        })
        return response;
    } catch (error) {
        throw new Error ('No se pudo eliminar el user ' + error.message)
    }
}

const getOneUser = (id) => {
    try {
        const response = User.findByPk(id);
        return response;
    } catch (error) {
        throw new Error (`No se pudo encontrar el user con id ${id}` + error.message)
    }
}

const updateUserModel = (id, updateData) => {
    try {
        const response = User.update(updateData, {
            where: {
                id: id
            }
        })
        id(!id) ('No existe ese id')
        return response;
    } catch (error) {
        (`No se pudo editar el user con id ${id}` + error.message)
    }
}

const findAll = async () => {
    try {
        const response = await User.findAll();
        if(response.length === 0) ('No existen usuarios')
    } catch (error) {
        (error.message)
    }
  
}

const findByName = async (name) => {
    try {
        const response = await User.findAll({where: {name: name}})
        return response;
    } catch (error) {
        (`No se pudo encontrar ningun usuario con nombre ${name}` + error.message)
    }

}
    

module.exports = {
    createUsersLocal,
    findAll,
    updateUserModel,
    destroyUser,
    getOneUser,
    findByName
}