const { Mentorship } = require('../models');

const createMentorship = async (req, res) => {
    const { MentorID, MenteeID, StartDate, EndDate, Status } = req.body;

    try {
        const mentorship = new Mentorship({
            MentorID,
            MenteeID,
            StartDate,
            EndDate,
            Status,
        });

        await mentorship.save();
        res.json(mentorship);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getMentorships = async (req, res) => {
    try {
        const mentorships = await Mentorship.findAll();
        res.json(mentorships);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getMentorship = async (req, res) => {
    try {
        const mentorship = await Mentorship.findByPk(req.params.id);

        if (!mentorship) {
            return res.status(404).json({ msg: 'Mentorship not found' });
        }

        res.json(mentorship);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const updateMentorship = async (req, res) => {
    const { MentorID, MenteeID, StartDate, EndDate, Status } = req.body;

    try {
        const mentorship = await Mentorship.findByPk(req.params.id);

        if (!mentorship) {
            return res.status(404).json({ msg: 'Mentorship not found' });
        }

        mentorship.MentorID = MentorID || mentorship.MentorID;
        mentorship.MenteeID = MenteeID || mentorship.MenteeID;
        mentorship.StartDate = StartDate || mentorship.StartDate;
        mentorship.EndDate = EndDate || mentorship.EndDate;
        mentorship.Status = Status || mentorship.Status;

        await mentorship.save();

        res.json(mentorship);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const deleteMentorship = async (req, res) => {
    try {
        const mentorship = await Mentorship.findByPk(req.params.id);

        if (!mentorship) {
            return res.status(404).json({ msg: 'Mentorship not found' });
        }

        await mentorship.destroy();
        res.json({ msg: 'Mentorship removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    createMentorship,
    getMentorships,
    getMentorship,
    updateMentorship,
    deleteMentorship,
};
