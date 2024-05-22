const express = require('express');
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const startupRoutes = require('./startupRoutes');
const resourceRoutes = require('./resourceRoutes');
const mentorshipRoutes = require('./mentorshipRoutes');
const investmentRoutes = require('./investmentRoutes');
const chatRoutes = require('./chatRoutes');
const videoConferenceRoutes = require('./videoConferenceRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/startups', startupRoutes);
router.use('/resources', resourceRoutes);
router.use('/mentorships', mentorshipRoutes);
router.use('/investments', investmentRoutes);
router.use('/chats', chatRoutes);
router.use('/videoconferences', videoConferenceRoutes);

module.exports = router;
