'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      post_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        references: { model: 'users', key: 'user_id' }
      },
      post_title: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      post_image: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      post_content: {
        type: Sequelize.TEXT('long')
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        references: { model: 'categories', key: 'category_id' }
      },
      post_comments: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        defaultValue: 0
      },
      post_likes: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        defaultValue: 0
      },
      post_views: {
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
