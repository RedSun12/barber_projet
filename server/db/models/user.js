'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Question, UsersQuestion }) {
      this.belongsToMany(Question, {
        through: UsersQuestion,
        foreignKey: 'userId',
      });
    }
  }
  User.init({
     username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    score: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
