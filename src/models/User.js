const {
  user_gender_male,
  user_gender_female,
  user_role_1,
  user_role_2,
  application_status_accepted,
  application_status_rejected,
  goal_1,
  goal_2,
  goal_3,
  goal_4,
  goal_5,
  goal_6,
  goal_7,
  goal_8,
  goal_9,
  goal_10,
  goal_11,
} = require('../config/constants');
const { area_1, area_2, area_3, area_4 } = require('../config/constants');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
        unique: true,
      },
      googleId: {
        type: DataTypes.TEXT('long'),
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      gender: {
        type: DataTypes.ENUM(user_gender_male, user_gender_female),
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      height: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      role: {
        type: DataTypes.ENUM(user_role_1, user_role_2),
        allowNull: false,
        defaultValue: user_role_1,
        validate: {
          notEmpty: true,
        },
      },
      idCardNumber: {
        type: DataTypes.STRING,
        validate: {
          is: /(?=.*?[0-9]).{13}/,
        },
      },
      address: {
        type: DataTypes.STRING,
      },
      healthCoin: {
        type: DataTypes.INTEGER,
      },
      application_status: {
        type: DataTypes.ENUM(
          application_status_accepted,
          application_status_rejected
        ),
      },
      area: {
        type: DataTypes.ENUM(area_1, area_2, area_3),
      },
      years_of_experience: {
        type: DataTypes.DATE,
      },
      description: {
        type: DataTypes.STRING,
      },
      goals: {
        type: DataTypes.ENUM(
          goal_1,
          goal_2,
          goal_3,
          goal_4,
          goal_5,
          goal_6,
          goal_7,
          goal_8,
          goal_9,
          goal_10,
          goal_11
        ),
      },
    },
    { underscored: true }
  );
  User.associate = (db) => {
    User.hasMany(db.History, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
    User.hasMany(db.Session, {
      as: 'customer',
      foreignKey: {
        name: 'customerId',
        allowNull: false,
      },
    });
    User.hasMany(db.Session, {
      as: 'specialist',
      foreignKey: {
        name: 'specialistId',
        allowNull: false,
      },
    });
    User.hasMany(db.SpecialistVideo, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
    });
    User.hasMany(db.ChatRoom, {
      as: 'user1',
      foreignKey: {
        name: 'user1Id',
        allowNull: false,
      },
    });
    User.hasMany(db.ChatRoom, {
      as: 'user2',
      foreignKey: {
        name: 'user2Id',
        allowNull: false,
      },
    });
    User.belongsToMany(db.Expertise, {
      through: db.SpecialistExpertise,
      foreignKey: 'userId',
    });
  };
  return User;
};
