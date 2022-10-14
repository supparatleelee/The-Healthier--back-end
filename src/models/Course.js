module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "Course",
    {
      courseName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      courseDuration: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    { underscored: true }
  );
  Course.associate = (db) => {
    Course.hasMany(db.Session, {
      foreignKey: {
        name: "courseId",
        allowNull: false,
      },
    });
    Course.belongsTo(db.CourseVideo, {
      foreignKey: "courseId",
      allowNull: false,
    });
  };
  return Course;
};
