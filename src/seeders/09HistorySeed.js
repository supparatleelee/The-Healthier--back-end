'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('histories', [
      {
        payment: 'CreditCard',
        current_price: '2000',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '13',
        package_id: '3',
      },
      {
        payment: 'Cash',
        current_price: '3000',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '14',
        package_id: '5',
      },
      {
        payment: 'CreditCard',
        current_price: '1500',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '15',
        package_id: '2',
      },
      {
        payment: 'Cash',
        current_price: '3500',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '16',
        package_id: '6',
      },
      {
        payment: 'CreditCard',
        current_price: '5000',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '17',
        package_id: '9',
      },
      {
        payment: 'Cash',
        current_price: '4000',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '18',
        package_id: '7',
      },
      {
        payment: 'CreditCard',
        current_price: '4500',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '19',
        package_id: '8',
      },
      {
        payment: 'Cash',
        current_price: '2500',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '20',
        package_id: '4',
      },
      {
        payment: 'CreditCard',
        current_price: '1000',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '21',
        package_id: '1',
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
