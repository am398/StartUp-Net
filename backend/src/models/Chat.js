const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Chat = sequelize.define('Chat', {
    ChatID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    SenderID: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    ReceiverID: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    Message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    Timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Chat;
