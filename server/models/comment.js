'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(11)
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER(11)
      },
      post_id: {
        allowNull: false,
        type: DataTypes.INTEGER(11)
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING(255)
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
      modelName: 'comment',
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );
  return Comment;
};
