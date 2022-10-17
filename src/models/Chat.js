module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define(
    'Chat',
    {
      chatLog: {
        type: DataTypes.STRING,
      },
    },
    { underscored: true }
  );
  Chat.associate = (db) => {
    Chat.belongsTo(db.User, {
      as: 'sender',
      foreignKey: {
        name: 'senderId',
        allowNull: false,
      },
    });
    Chat.belongsTo(db.User, {
      as: 'receiver',
      foreignKey: {
        name: 'receiverId',
        allowNull: false,
      },
    });
  };
  return Chat;
};
