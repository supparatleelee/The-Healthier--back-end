module.exports = (sequelize, DataTypes) => {
  const Expertise = sequelize.define(
    "Expertise",
    {
      name: {
        type: DataTypes.STRING,
      },
    },
    { underscored: true }
  );
  Expertise.associate = (db) => {
    Expertise.hasMany(db.SpecialistExpertise, {
      foreignKey: {
        name: "expertiseId",
        allowNull: false,
      },
    });
  };
  return Expertise;
};
