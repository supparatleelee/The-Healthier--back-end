const { area_1, area_2, area_3, area_4 } = require("../config/constants");

module.exports = (sequelize, DataTypes) => {
  const SpecialistExpertise = sequelize.define(
    "SpecialistExpertise",
    {
      area: {
        type: DataTypes.ENUM(area_1, area_2, area_3, area_4),
      },
      yearsOfExperience: {
        type: DataTypes.DATE,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    { underscored: true }
  );
  SpecialistExpertise.associate = (db) => {
    SpecialistExpertise.belongsTo(db.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
    });
    SpecialistExpertise.belongsTo(db.Expertise, {
      foreignKey: {
        name: "expertiseId",
        allowNull: false,
      },
    });
  };
  return SpecialistExpertise;
};
