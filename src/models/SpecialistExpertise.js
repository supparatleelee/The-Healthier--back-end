module.exports = (sequelize, DataTypes) => {
  const SpecialistExpertise = sequelize.define(
    'SpecialistExpertise',
    {},
    { underscored: true, timestamps: false }
  );
  // SpecialistExpertise.associate = (db) => {
  //   SpecialistExpertise.belongsTo(db.User, {
  //     foreignKey: {
  //       name: 'userId',
  //       allowNull: false,
  //     },
  //   });
  //   SpecialistExpertise.belongsTo(db.Expertise, {
  //     foreignKey: {
  //       name: 'expertiseId',
  //       allowNull: false,
  //     },
  //   });
  // };
  return SpecialistExpertise;
};
