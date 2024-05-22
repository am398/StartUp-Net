const express = require('express');
const { createVideoConference, getVideoConferences, getVideoConference } = require('../controllers/videoConferenceController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createVideoConference);
router.get('/', authMiddleware, getVideoConferences);
router.get('/:id', authMiddleware, getVideoConference);

module.exports = router;
