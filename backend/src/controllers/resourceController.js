const { Resource } = require('../models');

const createResource = async (req, res) => {
    const { Title, Description, URL, ResourceType } = req.body;
    const UploadedBy = req.user.id;

    try {
        const resource = new Resource({
            Title,
            Description,
            URL,
            ResourceType,
            UploadedBy,
        });

        await resource.save();
        res.json(resource);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getResources = async (req, res) => {
    try {
        const resources = await Resource.findAll();
        res.json(resources);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const getResource = async (req, res) => {
    try {
        const resource = await Resource.findByPk(req.params.id);

        if (!resource) {
            return res.status(404).json({ msg: 'Resource not found' });
        }

        res.json(resource);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const updateResource = async (req, res) => {
    const { Title, Description, URL, ResourceType } = req.body;

    try {
        const resource = await Resource.findByPk(req.params.id);

        if (!resource) {
            return res.status(404).json({ msg: 'Resource not found' });
        }

        resource.Title = Title || resource.Title;
        resource.Description = Description || resource.Description;
        resource.URL = URL || resource.URL;
        resource.ResourceType = ResourceType || resource.ResourceType;

        await resource.save();

        res.json(resource);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

const deleteResource = async (req, res) => {
    try {
        const resource = await Resource.findByPk(req.params.id);

        if (!resource) {
            return res.status(404).json({ msg: 'Resource not found' });
        }

        await resource.destroy();
        res.json({ msg: 'Resource removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    createResource,
    getResources,
    getResource,
    updateResource,
    deleteResource,
};
