const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProfileTag extends Model { }

ProfileTag.init({
    // add properites here, ex:
    ProfileId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Profile',
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

module.exports = ProfileTag