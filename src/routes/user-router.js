import express from 'express';

const router = new express.Router();

export const userRouter = () => {
    router
        .route('/users')
        .get((req, res) => res.json({message: 'USER ROUTE'}));
};
