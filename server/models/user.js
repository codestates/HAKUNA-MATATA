'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(11)
      },
      user_login: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(255)
      },
      user_password: {
        allowNull: false,
        type: DataTypes.STRING(255)
      },
      user_email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(255)
      },
      user_nickname: {
        unique: true,
        type: DataTypes.STRING(255)
      },
      user_image: {
        type: DataTypes.STRING(255)
      },
      user_bio: {
        type: DataTypes.STRING(255)
      },
      user_role: {
        allowNull: false,
        defaultValue: 2,
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
      modelName: 'user',
      id: 'user_id',
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );
  return User;
};
