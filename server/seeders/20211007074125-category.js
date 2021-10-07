'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        category_name: '연애'
      },
      {
        category_name: '친구'
      },
      {
        category_name: '직장'
      },
      {
        category_name: '가족'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
