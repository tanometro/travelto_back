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
        const response = User.findPK(id);
        return response;
    } catch (error) {
        throw new Error (`No se pudo encontrar el user con id ${id}` + error.message)
    }
}

module.exports = {
    createUsersLocal,
    destroyUser,
    getOneUser
}