'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn('Symptoms', 'userId' ,Sequelize.INTEGER);
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn('Symptoms', 'userId' ,{});
  }
};
