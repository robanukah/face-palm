import express from 'express';

import {fetchUser, fetchUsers, createUser} from '../db/user';

const router = new express.Router();

router
    .route('/users')
    .get((req, res) => fetchUsers(res))
    .post((req, res) => createUser(req, res));

router
    .route('/users/:user_id')
    .get((req, res) => fetchUser(req, res));

module.exports = router;
