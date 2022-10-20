'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('histories', [
      {
        payment: 'CreditCard',
        current_price: '100',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '13',
        package_id: '3',
      },
      {
        payment: 'Cash',
        current_price: '100',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '14',
        package_id: '5',
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
