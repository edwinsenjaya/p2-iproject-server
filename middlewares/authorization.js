const { Transaction } = require("../models");

const authorization = async function (req, res, next) {
  const transId = req.params.id;
  try {
    const data = await Transaction.findByPk(transId);
    const userId = data.UserId;

    if (!data) {
      throw { name: "NotFound" };
    } else {
      if (userId !== req.user.id) {
        throw { name: "Forbidden" };
      }
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authorization;
