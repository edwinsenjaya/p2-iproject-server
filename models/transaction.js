"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsToMany(models.Tag, { through: models.TransTag });
      Transaction.hasMany(models.TransTag);
      Transaction.belongsTo(models.User);
    }
  }
  Transaction.init(
    {
      name: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      date: DataTypes.DATE,
      currency: DataTypes.STRING,
      location: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
