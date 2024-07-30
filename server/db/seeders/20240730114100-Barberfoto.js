'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Barberfotos', [
        {
        foto: '1.jpg',
      },
      {
        foto: '2.jpg',
      },
      {
        foto: '1.jpg',
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Barberfotos', null, {});
  }
};
