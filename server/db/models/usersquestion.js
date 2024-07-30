'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersQuestion extends Model {
    static associate(models) {
    }
  }
  UsersQuestion.init({
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsersQuestion',
  });
  return UsersQuestion;
};