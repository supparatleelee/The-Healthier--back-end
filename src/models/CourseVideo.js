module.exports = (sequelize, DataTypes) => {
  const CourseVideo = sequelize.define(
    'CourseVideo',
    {},
    { underscored: true }
  );
  CourseVideo.associate = (db) => {
    CourseVideo.hasMany(db.Course, {
      foreignKey: {
        name: 'courseVideoId',
        allowNull: false,
      },
    });
    CourseVideo.belongsTo(db.SpecialistVideo, {
      foreignKey: {
        name: 'specialistVideoId',
        allowNull: false,
      },
    });
  };
  return CourseVideo;
};
