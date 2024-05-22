const express = require('express');
const { createMentorship, getMentorships, getMentorship, updateMentorship, deleteMentorship } = require('../controllers/mentorshipController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createMentorship);
router.get('/', getMentorships);
router.get('/:id', getMentorship);
router.put('/:id', authMiddleware, updateMentorship);
router.delete('/:id', authMiddleware, deleteMentorship);

module.exports = router;
