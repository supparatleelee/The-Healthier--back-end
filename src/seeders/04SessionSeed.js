'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sessions', [
      {
        completed: false,
        start_date: new Date(),
        course_duration: '30',
        customer_id: '13',
        specialist_id: '1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        completed: false,
        start_date: new Date(),
        course_duration: '15',
        customer_id: '14',
        specialist_id: '2',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        completed: false,
        start_date: new Date(),
        course_duration: '7',
        customer_id: '18',
        specialist_id: '5',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        completed: false,
        start_date: new Date(),
        course_duration: '15',
        customer_id: '15',
        specialist_id: '6',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        completed: false,
        start_date: new Date(),
        course_duration: '7',
        customer_id: '21',
        specialist_id: '7',
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
