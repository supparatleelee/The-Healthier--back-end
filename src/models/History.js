module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define(
    "History",
    {
      payment: {
        type: DataTypes.STRING,
        notNull: false,
        validate: {
          notEmpty: true,
        },
      },
      currentPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    { underscored: true }
  );
  History.associate = (db) => {
    History.belongsTo(db.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
    History.belongsTo(db.Package, {
      foreignKey: {
        name: "packageId",
        allowNull: false,
      },
    });
  };
  return History;
};
