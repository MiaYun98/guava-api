const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model {}

Item.init({
    // add properites here, ex:
    name: {
         type: DataTypes.STRING,
         allowNull:false,
    },
    type:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    stats: {
        type: DataTypes.INTEGER,
    }
},{
    sequelize,
});

module.exports=Item
