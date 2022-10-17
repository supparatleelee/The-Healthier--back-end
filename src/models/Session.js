module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define(
    'Session',
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
      as: 'customer',
      foreignKey: {
        name: 'customerId',
        allowNull: false,
      },
    });
    Session.belongsTo(db.User, {
      as: 'specialist',
      foreignKey: {
        name: 'specialistId',
        allowNull: false,
      },
    });
    Session.belongsTo(db.Course, {
      foreignKey: {
        name: 'courseId',
        allowNull: false,
      },
    });
  };
  return Session;
};
