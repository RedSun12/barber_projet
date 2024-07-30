'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Contacts', [
        {
          adress: 'Бэйкер стрит',
          telephone: '+7999-999-99-99'
      }
    
    ], {});

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Contacts', null, {});
  }
};
