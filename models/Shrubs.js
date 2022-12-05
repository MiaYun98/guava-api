const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shrubs extends Model { }

Shrubs.init(
    {
        levels: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        stats: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
    }
);

module.exports = Shrubs;