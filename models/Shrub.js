const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shrub extends Model {}

Shrub.init({
    // add properites here, ex:
    name: {
         type: DataTypes.STRING,
         allowNull:false,
    },
    level:{
        type: DataTypes.INTEGER,
    },
    hunger: {
        type: DataTypes.INTEGER,
    },
    hygiene: {
        type: DataTypes.INTEGER,
    },
    happiness: {
        type: DataTypes.INTEGER,
    },
    energy: {
        type: DataTypes.INTEGER,
    }
},{
    sequelize,
});

module.exports=Shrub