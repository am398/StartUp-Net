const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/:id', authMiddleware, getUserProfile);
router.put('/:id', authMiddleware, updateUserProfile);

module.exports = router;
