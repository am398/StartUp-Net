const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Investment = sequelize.define('Investment', {
    InvestmentID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    InvestorID: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    StartupID: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    Amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    InvestmentDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    EquityPercentage: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

module.exports = Investment;
