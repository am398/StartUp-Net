const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Resource = sequelize.define('Resource', {
    ResourceID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    Title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    URL: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ResourceType: {
        type: DataTypes.ENUM('Article', 'Video', 'Tool'),
        allowNull: false,
    },
    UploadedBy: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    UploadDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Resource;
