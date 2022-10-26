module.exports = (sequelize, DataTypes) => {
  const SessionVideo = sequelize.define(
    'SessionVideo',
    {},
    { underscored: true, timestamps: false }
  );

  // SessionVideo.associate = (db) => {
  //   SessionVideo.hasMany(db.Course, {
  //     foreignKey: {
  //       name: 'SessionVideoId',
  //       allowNull: false,
  //     },
  //   });
  //   SessionVideo.belongsTo(db.SpecialistVideo, {
  //     foreignKey: {
  //       name: 'specialistVideoId',
  //       allowNull: false,
  //     },
  //   });
  // };
  return SessionVideo;
};
