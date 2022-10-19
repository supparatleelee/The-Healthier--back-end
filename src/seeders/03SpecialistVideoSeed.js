'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('specialist_videos', [
      {
        name: 'Bench-Press Guide',
        video_files: '34122314',
        video_status: 'Private',
        created_at: new Date(),
        updated_at: new Date(),
        user_id: '1',
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
