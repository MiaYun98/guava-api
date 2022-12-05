const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class User extends Model {}

User.init({
    // add properites here, ex:
    userName: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[8]
        }
    }
},{
    sequelize,
    hooks:{
        beforeCreate:function(userObj){
            userObj.password = bcrypt.hashSync(userObj.password,5)
            return userObj
        }
    }
});

module.exports=User