module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define(
    "Session",
    {
      followUpDate: {
        type: DataTypes.DATEONLY,
      },
      completed: {
        type: DataTypes.BOOLEAN,
      },
    },
    { underscored: true }
  );
  Session.associate = (db) => {
    Session.belongsTo(db.User, {
      as: "customerId",
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
    });
    Session.belongsTo(db.User, {
      as: "specialistId",
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
    });
    Session.belongsTo(db.Course, {
      foreignKey: {
        name: "coursesId",
        allowNull: false,
      },
    });
  };
  return Session;
};
