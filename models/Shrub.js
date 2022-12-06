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
    stats: {
        type: DataTypes.INTEGER,
    }
},{
    sequelize,
});

module.exports=Shrub