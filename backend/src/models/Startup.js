const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Startup = sequelize.define('Startup', {
    StartupID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    FounderID: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    Industry: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Stage: {
        type: DataTypes.ENUM('Idea', 'MVP', 'Growth', 'Scaling'),
        allowNull: false,
    },
    CreationDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Startup;
