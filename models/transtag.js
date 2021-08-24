"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TransTag extends Model {
    static associate(models) {
      TransTag.belongsTo(models.Tag);
      TransTag.belongsTo(models.Transaction);
    }
  }
  TransTag.init(
    {
      TransactionId: DataTypes.INTEGER,
      TagId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "TransTag",
    }
  );
  return TransTag;
};
