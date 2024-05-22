const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Mentorship = sequelize.define('Mentorship', {
    MentorshipID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    MentorID: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    MenteeID: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    StartDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    EndDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    Status: {
        type: DataTypes.ENUM('Active', 'Completed', 'Canceled'),
        allowNull: false,
    },
});

module.exports = Mentorship;
