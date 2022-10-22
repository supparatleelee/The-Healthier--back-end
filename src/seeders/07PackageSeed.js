'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('packages', [
      {
        name: 'Basic',
        price: '1000',
        duration: '7 days',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Basic',
        price: '1500',
        duration: '15days',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Basic',
        price: '2000',
        duration: '30days',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'intermediate',
        price: '2500',
        duration: '7days',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'intermediate',
        price: '3000',
        duration: '15days',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'intermediate',
        price: '3500',
        duration: '30days',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'advance',
        price: '4000',
        duration: '7days',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'advance',
        price: '4500',
        duration: '15days',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'advance',
        price: '5000',
        duration: '30days',
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
