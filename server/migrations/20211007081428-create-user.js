'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(255)
      },
      password: {
        type: Sequelize.STRING(255)
      },
      nickname: {
        unique: true,
        type: Sequelize.STRING(255)
      },
      image: {
        type: Sequelize.STRING(255)
      },
      bio: {
        type: Sequelize.STRING(255)
      },
      role: {
        allowNull: false,
        defaultValue: 2,
        type: Sequelize.INTEGER(11)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
