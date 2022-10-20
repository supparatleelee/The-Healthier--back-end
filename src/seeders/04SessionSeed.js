'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sessions', [
      {
        follow_up_date: '2022/10/26',
        completed: false,
        start_date: '2022/10/20',
        course_duration: '15',
        customer_id: '13',
        specialist_id: '1',
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
