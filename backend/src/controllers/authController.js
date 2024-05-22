const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const register = async (req, res) => {
    const jwtSecret = process.env.JWT_SECRET;
    const { Name, Email, Password, UserType } = req.body;

    try {
        let user = await User.findOne({ where: { Email } });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            Name,
            Email,
            Password: await bcrypt.hash(Password, 10),
            UserType,
        });

        await user.save();

        const payload = {
            user: {
                id: user.UserID,
            },
        };

        jwt.sign(payload, jwtSecret, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const login = async (req, res) => {
    const { Email, Password } = req.body;

    try {
        let user = await User.findOne({ where: { Email } });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(Password, user.Password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = {
            user: {
                id: user.UserID,
            },
        };

        jwt.sign(payload, jwtSecret, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    register,
    login,
};
