'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('specialist_expertises', [
      { expertise_id: '7', user_id: '1' },
      { expertise_id: '6', user_id: '1' },
      { expertise_id: '12', user_id: '1' },
      { expertise_id: '14', user_id: '1' },
      { expertise_id: '17', user_id: '1' },
      { expertise_id: '8', user_id: '2' },
      { expertise_id: '12', user_id: '2' },
      { expertise_id: '19', user_id: '2' },
      { expertise_id: '9', user_id: '2' },
      { expertise_id: '21', user_id: '2' },
      { expertise_id: '7', user_id: '3' },
      { expertise_id: '9', user_id: '3' },
      { expertise_id: '15', user_id: '3' },
      { expertise_id: '18', user_id: '3' },
      { expertise_id: '12', user_id: '3' },
      { expertise_id: '10', user_id: '4' },
      { expertise_id: '13', user_id: '4' },
      { expertise_id: '21', user_id: '4' },
      { expertise_id: '19', user_id: '4' },
      { expertise_id: '8', user_id: '4' },
      { expertise_id: '23', user_id: '5' },
      { expertise_id: '22', user_id: '5' },
      { expertise_id: '21', user_id: '5' },
      { expertise_id: '25', user_id: '5' },
      { expertise_id: '21', user_id: '6' },
      { expertise_id: '22', user_id: '6' },
      { expertise_id: '22', user_id: '7' },
      { expertise_id: '24', user_id: '7' },
      { expertise_id: '15', user_id: '7' },
      { expertise_id: '7', user_id: '7' },
      { expertise_id: '2', user_id: '8' },
      { expertise_id: '4', user_id: '8' },
      { expertise_id: '5', user_id: '8' },
      { expertise_id: '6', user_id: '8' },
      { expertise_id: '14', user_id: '8' },
      { expertise_id: '2', user_id: '9' },
      { expertise_id: '5', user_id: '9' },
      { expertise_id: '11', user_id: '9' },
      { expertise_id: '18', user_id: '9' },
      { expertise_id: '7', user_id: '9' },
      { expertise_id: '5', user_id: '10' },
      { expertise_id: '1', user_id: '10' },
      { expertise_id: '17', user_id: '10' },
      { expertise_id: '22', user_id: '10' },
      { expertise_id: '25', user_id: '10' },
      { expertise_id: '4', user_id: '11' },
      { expertise_id: '3', user_id: '11' },
      { expertise_id: '5', user_id: '11' },
      { expertise_id: '16', user_id: '11' },
      { expertise_id: '23', user_id: '11' },
      { expertise_id: '6', user_id: '12' },
      { expertise_id: '1', user_id: '12' },
      { expertise_id: '12', user_id: '12' },
      { expertise_id: '21', user_id: '12' },
      { expertise_id: '22', user_id: '12' },
      { expertise_id: '14', user_id: '12' },
      { expertise_id: '8', user_id: '12' },
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
