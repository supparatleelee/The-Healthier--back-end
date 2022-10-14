module.exports = (sequelize, DataTypes) => {
  const Package = sequelize.define(
    "Package",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      duration: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    { underscored: true }
  );
  Package.associate = (db) => {
    Package.hasMany(db.History, {
      foreignKey: {
        name: "packageId",
        allowNull: false,
      },
    });
  };
  return Package;
};
