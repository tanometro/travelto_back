import { Request, Response } from 'express';
const {createComment, getOneComment, getComments, updateCommentService, destroyOneComment} = require('../services/comments.services');

const createOneComment = async (req, res) => {
    try {
        const response = await createComment();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

const readOneComment = async (req, res) => {
    const {id} = req.params;
    try {
        const response = await getOneComment(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

const readAllComment = async (req, res) => {
    try {
        const response = await getComments();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

const updateOneComment = async (req, res) => {
    const {id} = req.params;
    const updateData = req.body;
    try {
        const response = await updateCommentService(Number(id), updateData); 
    } catch (error) {
        
    }
}

const deleteOneComment = async (req, res) => {
    const {id} = req.params;
    try {
        const response = await destroyOneComment(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

module.exports = {
    createOneComment,
    readAllComment,
    readOneComment,
    updateOneComment,
    deleteOneComment
}