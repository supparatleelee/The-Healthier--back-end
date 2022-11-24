module.exports = (sequelize, DataTypes) => {
  const Expertise = sequelize.define(
    'Expertise',
    {
      name: {
        type: DataTypes.STRING,
      },
    },
    { underscored: true }
  );
  Expertise.associate = (db) => {
    Expertise.belongsToMany(db.User, {
      through: db.SpecialistExpertise,
      foreignKey: 'expertiseId',
    });
  };
  return Expertise;
};
