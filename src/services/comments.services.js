const { Comment } = require('../db');

const createComment = async (usuarioId, attractionId, compraId, rating, description) => {
    try {
        const review = await Comment.create({
            usuarioId,
            attractionId,
            compraId,
            rating,
            description,
        });

        return review;
    } catch (error) {
        throw new Error('Error al agregar la reseña: ' + error.message);
    }
};

const getReviewsByAttraction = async (attractionId) => {
    try {
        const reviews = await Comment.findAll({
            where: { attractionId },
        });

        return reviews;
    } catch (error) {
        throw new Error('Error al obtener las reseñas: ' + error.message);
    }
};

const getOneComment = async (id) => {
    try {
        const response = await Comment.findByPk(id);
        if (!response) throw new Error("No existe ese comentario");
        return response;
    } catch (error) {
        throw new Error("Error al obtener el comentario: " + error.message);
    }
};

const getComments = async () => {
    try {
        const response = await Comment.findAll();
        return response;
    } catch (error) {
        throw new Error("Error al obtener todos los comentarios: " + error.message);
    }
};

const updateCommentService = async (id, body) => {
    try {
        const response = await Comment.update(body, {
            where: {
                id: id,
            },
        });

        if (response[0] === 0) {
            throw new Error(`No se encontró ningún comentario con ID ${id} para actualizar.`);
        }

        return `El comentario con ID ${id} fue actualizado.`;
    } catch (error) {
        throw new Error("Error al actualizar el comentario: " + error.message);
    }
};

const deleteReview = async (commentId) => {
    try {
        const result = await Comment.update({ isActive: false }, {
            where: { id: commentId },
        });

        return result;
    } catch (error) {
        throw new Error('Error al desactivar la reseña: ' + error.message);
    }
};

module.exports = {
    createComment,
    getOneComment,
    getComments,
    updateCommentService,
    deleteReview,
    getReviewsByAttraction,
};
