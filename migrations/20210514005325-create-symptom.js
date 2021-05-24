'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Symptoms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fever: {
        allowNull: false,
        type: Sequelize.STRING
      },
      breathingDifficulty: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cough: {
        allowNull: false,
        type: Sequelize.STRING
      },
      runnyNose: {
        allowNull: false,
        type: Sequelize.STRING
      },
      losingSenseSmell: {
        allowNull: false,
        type: Sequelize.STRING
      },
      losingSenseTaste: {
        allowNull: false,
        type: Sequelize.STRING
      },
      bodyAches: {
        allowNull: false,
        type: Sequelize.STRING
      },
      vomitDiarrhea: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      testResult: {
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Symptoms');
  }
};