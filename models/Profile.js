const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile extends Model { }

Profile.init({
     // add properites here, ex:
     money: {
          type: DataTypes.INTEGER,
     },
     days: {
          type: DataTypes.INTEGER,
     }
}, {
     sequelize
});

module.exports = Profile;