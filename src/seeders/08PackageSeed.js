'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('packages', [
      {
        name: 'Basic',
        price: '50',
        duration: '15days',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Basic',
        price: '100',
        duration: '30days',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Basic',
        price: '150',
        duration: '60days',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
