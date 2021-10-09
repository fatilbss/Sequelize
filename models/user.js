'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  
    static associate(models) {
      models.User.hasMany(models.ObjetTrouve)
      // define association here
    }
  };
  User.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    passeword: DataTypes.STRING,
    bio: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};