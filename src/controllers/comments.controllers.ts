import { Request, Response } from 'express';
const {createComment, getOneComment, getComments, updateCommentService, destroyOneComment} = require('../services/comments.services');

const createOneComment = async (req: Request, res: Response) => {
    try {
        const response = await createComment();
        res.status(200).json(response);
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}

const readOneComment = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const response = await getOneComment(id);
        res.status(200).json(response);
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}

const readAllComment = async (req: Request, res: Response) => {
    try {
        const response = await getComments();
        res.status(200).json(response);
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}

const updateOneComment = async (req: Request, res: Response) => {
    const {id} = req.params;
    const updateData = req.body;
    try {
        const response = await updateCommentService(Number(id), updateData); 
    } catch (error: any) {
        
    }
}

const deleteOneComment = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const response = await destroyOneComment(id);
        res.status(200).json(response);
    } catch (error: any) {
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