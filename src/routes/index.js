import express from 'express';

const router = new express.Router();

router.use(require('./post-router'));
router.use(require('./user-router'));

module.exports = router;
