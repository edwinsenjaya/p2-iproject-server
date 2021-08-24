"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TransTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
