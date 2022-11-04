module.exports = (sequelize, DataTypes) => {
  const SpecialistExpertise = sequelize.define(
    'SpecialistExpertise',
    {},
    { underscored: true, timestamps: false }
  );
  return SpecialistExpertise;
};
