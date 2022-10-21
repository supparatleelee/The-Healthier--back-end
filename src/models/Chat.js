module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define(
    'Chat',
    {
      message: {
        type: DataTypes.TEXT('long'),
      },
      sender: {
        type: DataTypes.STRING,
      },
    },
    { underscored: true }
  );
  Chat.associate = (db) => {
    Chat.belongsTo(db.ChatRoom, {
      foreignKey: {
        name: 'chatRoomId',
        allowNull: false,
      },
    });
  };
  return Chat;
};
