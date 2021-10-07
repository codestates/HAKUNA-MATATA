'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init(
    {
      post_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(11)
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER(11)
      },
      post_title: {
        allowNull: false,
        type: DataTypes.STRING(255)
      },
      post_image: {
        allowNull: false,
        type: DataTypes.STRING(255)
      },
      post_content: {
        type: DataTypes.TEXT('long')
      },
      category_id: {
        allowNull: false,
        type: DataTypes.INTEGER(11)
      },
      post_comments: {
        type: DataTypes.INTEGER(11)
      },
      post_likes: {
        type: DataTypes.INTEGER(11)
      },
      post_views: {
        type: DataTypes.INTEGER(11)
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date()
      }
    },
    {
      sequelize,
      modelName: 'post',
      id: 'post_id',
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );
  return Post;
};
