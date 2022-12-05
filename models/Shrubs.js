const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shrubs extends Model {}

Shrubs.init({
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

module.exports=Shrubs