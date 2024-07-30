'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {
      Question.belongsTo(models.Theme, {
        foreignKey: 'themeId',
        as: 'theme',
      });
    }
  };
  Question.init({
    themeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Theme',
        key: 'id',
      },
      onDelete: 'cascade',
      allowNull: false,
    },
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    scoreQ: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};