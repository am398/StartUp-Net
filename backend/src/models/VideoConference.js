const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const VideoConference = sequelize.define('VideoConference', {
    ConferenceID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    HostID: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    ParticipantID: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    StartTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    EndTime: {
        type: DataTypes.DATE,
        allowNull: true,
    },
});

module.exports = VideoConference;
