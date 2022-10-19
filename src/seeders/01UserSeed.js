'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        first_name: 'Test4',
        last_name: 'Test34',
        email: 'ggggg@gmail.com',
        google_id: '',
        password: '1234',
        gender: 'Male',
        birth_date: '2022/01/11',
        weight: '70',
        height: '190',
        role: 'Specialist',
        id_card_number: '1101021022',
        address: '',
        health_coin: 1,
        application_status: 'Accepted',
        goals: 'Headache',
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
