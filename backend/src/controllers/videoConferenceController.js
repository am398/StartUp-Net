const { VideoConference } = require('../models');

const createVideoConference = async (req, res) => {
    const { HostID, ParticipantID, StartTime, EndTime } = req.body;

    try {
        const videoConference = new VideoConference({
            HostID,
            ParticipantID,
            StartTime,
            EndTime,
        });

        await videoConference.save();
        res.json(videoConference);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getVideoConferences = async (req, res) => {
    try {
        const videoConferences = await VideoConference.findAll();
        res.json(videoConferences);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getVideoConference = async (req, res) => {
    try {
        const videoConference = await VideoConference.findByPk(req.params.id);

        if (!videoConference) {
            return res.status(404).json({ msg: 'Video Conference not found' });
        }

        res.json(videoConference);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    createVideoConference,
    getVideoConferences,
    getVideoConference,
};
