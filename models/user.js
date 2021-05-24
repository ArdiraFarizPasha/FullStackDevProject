'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasOne(models.Symptom)
    }
  };
  User.init({
    fullName: DataTypes.STRING,
    gender: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    visitedHospital: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};