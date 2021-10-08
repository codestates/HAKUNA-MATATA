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
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(11)
      },
      login: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(255)
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(255)
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(255)
      },
      nickname: {
        unique: true,
        type: DataTypes.STRING(255)
      },
      image: {
        type: DataTypes.STRING(255)
      },
      bio: {
        type: DataTypes.STRING(255)
      },
      role: {
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
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );
  return User;
};
