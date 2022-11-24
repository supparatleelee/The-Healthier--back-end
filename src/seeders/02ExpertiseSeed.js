'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('expertises', [
      {
        name: 'Cardiovascular',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Clinical Electrophysiology',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Geriatrics',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Oncology',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Orthopedics',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Sports',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Womens Health',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'HIIT Trainning',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Body-weight Trainning',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Weight Trainning',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Yoga',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Cardio',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Abdominal muscles building',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Flexibility Trainning',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Obese people Trainning',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Senior Trainning',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Kids Trainning',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Pirates Yoga',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Boxing',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Aerobic Drance',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Muscle Building',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Food nutrition',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Food for Senoir',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Food for convalescents',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Food for allergic people',
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
