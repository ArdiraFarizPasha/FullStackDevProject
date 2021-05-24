'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Symptom extends Model {
    static associate(models) {
      Symptom.belongsTo(models.User, {
        foreignKey: 'UserId'
      })
    }
  };
  Symptom.init({
    fever: DataTypes.STRING,
    breathingDifficulty: DataTypes.STRING,
    cough: DataTypes.STRING,
    runnyNose: DataTypes.STRING,
    losingSenseSmell: DataTypes.STRING,
    losingSenseTaste: DataTypes.STRING,
    bodyAches: DataTypes.STRING,
    vomitDiarrhea: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    testResult: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Symptom',
  });
  return Symptom;
};