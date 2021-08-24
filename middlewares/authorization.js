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

const a = [
  {
    n: 1,
    name: "food",
  },
  {
    n: 2,
    name: "transportation",
  },
  {
    n: 3,
    name: "entertainment",
  },
  {
    n: 4,
    name: "essential",
  },
  {
    n: 5,
    name: "clothing",
  },
  {
    n: 6,
    name: "utility",
  },
  {
    n: 7,
    name: "health",
  },
  {
    n: 8,
    name: "grocery",
  },
  {
    n: 9,
    name: "tax",
  },
  {
    n: 10,
    name: "emergency",
  },
  {
    n: 11,
    name: "monthly",
  },
  {
    n: 12,
    name: "weekly",
  },
  {
    n: 13,
    name: "daily",
  },
  {
    n: 14,
    name: "special",
  },
  {
    n: 15,
    name: "others",
  },
];
