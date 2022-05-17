import express from 'express';
import MessageController from '../controllers/messages.js';

const { getAllMessages, getMessageByID, createMessage } = MessageController;
const router = express.Router();

// CREATE NEW MESSAGE
router.route('/').get(getAllMessages).post(createMessage);
router.route('/:id').get(getMessageByID);

export default router;
