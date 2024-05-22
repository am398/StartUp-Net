const { Startup } = require('../models');

const createStartup = async (req, res) => {
    const { Name, Description, Industry, Stage } = req.body;
    const FounderID = req.user.id;

    try {
        const startup = new Startup({
            Name,
            Description,
            Industry,
            Stage,
            FounderID,
        });

        await startup.save();
        res.json(startup);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getStartups = async (req, res) => {
    try {
        const startups = await Startup.findAll();
        res.json(startups);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getStartup = async (req, res) => {
    try {
        const startup = await Startup.findByPk(req.params.id);

        if (!startup) {
            return res.status(404).json({ msg: 'Startup not found' });
        }

        res.json(startup);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const updateStartup = async (req, res) => {
    const { Name, Description, Industry, Stage } = req.body;

    try {
        const startup = await Startup.findByPk(req.params.id);

        if (!startup) {
            return res.status(404).json({ msg: 'Startup not found' });
        }

        startup.Name = Name || startup.Name;
        startup.Description = Description || startup.Description;
        startup.Industry = Industry || startup.Industry;
        startup.Stage = Stage || startup.Stage;

        await startup.save();

        res.json(startup);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const deleteStartup = async (req, res) => {
    try {
        const startup = await Startup.findByPk(req.params.id);

        if (!startup) {
            return res.status(404).json({ msg: 'Startup not found' });
        }

        await startup.destroy();
        res.json({ msg: 'Startup removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    createStartup,
    getStartups,
    getStartup,
    updateStartup,
    deleteStartup,
};
