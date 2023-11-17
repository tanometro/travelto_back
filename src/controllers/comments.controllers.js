const {
    createComment,
    getOneComment,
    getComments,
    updateCommentService,
    deleteReview,
    getReviewsByAttraction,
} = require('../services/comments.services');

const createOneComment = async (req, res) => {
    try {
        const { usuarioId, attractionId, compraId, rating, description } = req.body;
        const response = await createComment(usuarioId, attractionId, compraId, rating, description);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const readOneComment = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getOneComment(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const readAllComment = async (req, res) => {
    try {
        const response = await getComments();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateOneComment = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        await updateCommentService(Number(id), updateData);
        res.status(200).json({ message: `Comentario con ID ${id} actualizado.` });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteOneComment = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteReview(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const readReviewsByAttraction = async (req, res) => {
    const { attractionId } = req.params;
    try {
        const response = await getReviewsByAttraction(attractionId);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createOneComment,
    readOneComment,
    readAllComment,
    updateOneComment,
    deleteOneComment,
    readReviewsByAttraction
};
