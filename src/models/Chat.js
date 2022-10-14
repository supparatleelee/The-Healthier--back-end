module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define(
    "Chat",
    {
      chatLog: {
        type: DataTypes.STRING,
      },
    },
    { underscored: true }
  );
  Chat.associate = (db) => {
    Chat.belongsTo(db.User, {
      as: "senderId",
      foreignKey: {
        name: "chatId",
        allowNull: false,
      },
    });
    Chat.belongsTo(db.User, {
      as: "receiverId",
      foreignKey: {
        name: "chatId",
        allowNull: false,
      },
    });
  };
  return Chat;
};
