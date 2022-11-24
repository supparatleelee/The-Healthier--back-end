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
      courseDuration: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      startDate: {
        type: DataTypes.DATEONLY,
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
    Session.belongsToMany(db.SpecialistVideo, {
      through: db.SessionVideo,
      foreignKey: 'sessionId',
    });
  };
  return Session;
};
