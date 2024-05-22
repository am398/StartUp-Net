const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    UserID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    UserType: {
        type: DataTypes.ENUM('Entrepreneur', 'Mentor', 'Investor'),
        allowNull: false,
    },
    ProfilePicture: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Bio: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    DateJoined: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = User;
