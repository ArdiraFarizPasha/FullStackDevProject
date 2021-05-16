'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Symptom extends Model {
    static associate(models) {
      Symptom.belongsTo(models.User)
    }
  };
  Symptom.init({
    fever: DataTypes.BOOLEAN,
    breathingDifficulty: DataTypes.BOOLEAN,
    cough: DataTypes.BOOLEAN,
    runnyNose: DataTypes.BOOLEAN,
    losingSenseSmell: DataTypes.BOOLEAN,
    losingSenseTaste: DataTypes.BOOLEAN,
    bodyAches: DataTypes.BOOLEAN,
    vomitDiarrhea: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Symptom',
  });
  return Symptom;
};