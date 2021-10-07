'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      user_login: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(255)
      },
      user_email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(255)
      },
      user_password: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      user_nickname: {
        unique: true,
        type: Sequelize.STRING(255)
      },
      user_image: {
        type: Sequelize.STRING(255)
      },
      user_bio: {
        type: Sequelize.STRING(255)
      },
      user_role: {
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
