'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('packages', [
      {
        name: 'Basic7Days',
        price: '1000',
        duration: '7',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Basic15Days',
        price: '1500',
        duration: '15',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Basic30Days',
        price: '2000',
        duration: '30',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Intermediate7Days',
        price: '2500',
        duration: '7',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Intermediate15Days',
        price: '3000',
        duration: '15days',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Intermediate30Days',
        price: '3500',
        duration: '30',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Advance7Days',
        price: '4000',
        duration: '7',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Advance15Days',
        price: '4500',
        duration: '15',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Advance30Days',
        price: '5000',
        duration: '30',
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
