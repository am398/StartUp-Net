const express = require('express');
const { createChat, getChats, getChat } = require('../controllers/chatController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createChat);
router.get('/', authMiddleware, getChats);
router.get('/:id', authMiddleware, getChat);

module.exports = router;
