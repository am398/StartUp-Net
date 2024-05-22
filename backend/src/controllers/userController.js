const { User } = require('../models');

const getUserProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const updateUserProfile = async (req, res) => {
    const { Name, ProfilePicture, Bio } = req.body;

    try {
        const user = await User.findByPk(req.params.id);

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        user.Name = Name || user.Name;
        user.ProfilePicture = ProfilePicture || user.ProfilePicture;
        user.Bio = Bio || user.Bio;

        await user.save();

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getUserProfile,
    updateUserProfile,
};
