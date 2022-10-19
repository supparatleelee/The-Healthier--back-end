'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('chats', [
      {
        chat_log: 'Hello',
        created_at: new Date(),
        updated_at: new Date(),
        sender_id: '1',
        receiver_id: '1',
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
