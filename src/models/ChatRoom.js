module.exports = (sequelize, DataTypes) => {
  const ChatRoom = sequelize.define('ChatRoom', {}, { underscored: true });
  ChatRoom.associate = (db) => {
    ChatRoom.hasMany(db.Chat, {
      foreignKey: {
        name: 'ChatRoomId',
        allowNull: false,
      },
    });
    ChatRoom.belongsTo(db.User, {
      as: 'user1',
      foreignKey: {
        name: 'user1Id',
        allowNull: false,
      },
    });
    ChatRoom.belongsTo(db.User, {
      as: 'user2',
      foreignKey: {
        name: 'user2Id',
        allowNull: false,
      },
    });
  };
  return ChatRoom;
};
