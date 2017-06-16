import express from 'express';

const router = new express.Router();

router
    .route('/users')
    .get((req, res) => res.json({message: 'USER ROUTE'}));

module.exports = router;
