import express from 'express';
import { getUsers, postUser, getUser } from '../controller/users.controller.js';

const router = express.Router();

router.post('/users', postUser);
router.get('users', getUsers);
router.get('/users/:userId', getUser);

export default router;
