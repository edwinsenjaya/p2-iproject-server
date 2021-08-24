"use strict";
const { hashPassword } = require("../helpers/bcrypt");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Transaction);
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          message: "Email already registered",
        },
        validate: {
          isEmail: {
            message: "Email required",
          },
          notNull: {
            message: "Email required",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            message: "Password required",
          },
          notNull: {
            message: "Password required",
          },
          len: {
            args: [5],
            message: "Password too short",
          },
        },
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            message: "Please input your name",
          },
        },
      },
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
      budget: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            message: "Please input your starting budget",
          },
        },
      },
      balance: DataTypes.INTEGER,
      saving: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            message: "Please input your saving target",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate((instance) => {
    instance.password = hashPassword(instance.password);
    instance.balance = instance.budget;
  });

  return User;
};
