'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate(models) {
      Theme.hasMany(models.Question, {
        foreignKey: 'themeId',
        onDelete: 'cascade',
      });
    }
  };
  Theme.init({
    topic: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};
