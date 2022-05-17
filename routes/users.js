import express from 'express';
import UserController from '../controllers/users.js';


const { getAllUsers, getUserByID,createUser } = UserController;
const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUserByID);

export default router;
