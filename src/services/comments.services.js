const {Comment} = require('../db');


const createComment = (data) => {
    try {
        const response = Comment.create(data)
        return response;
    } catch (error) {
        throw new Error ("Mostro, no pude crear el comentario, y es que " + error.message)
    }
}

const getOneComment = (id) => {
    try {
        const response = Comment.findByPk(id);
        if (response === null) return ("No existe esa locación")
        return response;
    } catch (error) {
        throw new Error ("Mostro, intenta de nuevo. " + error.message)
    }
}

const getComments = () => {
    try {
        const response = Comment.findAll();
        return response;
    } catch (error) {
        throw new Error ("Error en buscar todos los comentarios: " + error.message)   
    }
}

const updateCommentService = async (id, body) => {
    try {
        const response = await Comment.update(body, {
            where: {
                id: id
            }
        })
        if (response[0] === 0) {
            throw new Error(`No se encontró ningún comentario con ID ${id} para actualizar.`);
        }
        return `Sr, el comentario con ID ${id} fue actualizado.`;
    }
    catch(error){
        throw new Error ("Error en actualizar el comentario: " + error.message)   
    }
}

const destroyOneComment = async (id) => {
    const response = await Comment.destoy({
        where: {
        id: id }
    })
}

module.exports = {
    createComment,
    getOneComment,
    getComments,
    updateCommentService,
    destroyOneComment
}