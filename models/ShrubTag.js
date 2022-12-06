const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ShrubsTag extends Model { }

ShrubsTag.init({
    // add properites here, ex:
    ShrubId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Shrub',
            key: 'id',
            unique: false,
        }
    },
    ItemId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Item',
            key: 'id',
            unique: false,
        }
    },
}, {
    sequelize,
});

module.exports = ShrubsTag