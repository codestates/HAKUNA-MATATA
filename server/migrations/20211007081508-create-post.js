'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        references: { model: 'users', key: 'id' }
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      content: {
        type: Sequelize.TEXT('long')
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        references: { model: 'categories', key: 'id' }
      },
      comments: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        defaultValue: 0
      },
      likes: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        defaultValue: 0
      },
      views: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        defaultValue: 0
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
    await queryInterface.dropTable('posts');
  }
};
