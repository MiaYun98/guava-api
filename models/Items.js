const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Items extends Model { }

Items.init(
    {
        itemType: {
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

module.exports = Items;