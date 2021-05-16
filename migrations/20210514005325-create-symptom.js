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
        type: Sequelize.BOOLEAN
      },
      breathingDifficulty: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      cough: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      runnyNose: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      losingSenseSmell: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      losingSenseTaste: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      bodyAches: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      vomitDiarrhea: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Symptoms');
  }
};