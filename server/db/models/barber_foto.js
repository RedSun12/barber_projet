'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barber_foto extends Model {
    static associate(models) {

    }
  }
  Barber_foto.init({
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Barberfoto',
  });
  return Barber_foto;
};