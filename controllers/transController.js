const { Transaction, User, Tag } = require("../models");

class Controller {
  static async viewTransactions(req, res, next) {
    try {
      const data = await Transaction.findAll({
        include: [{ model: User }, { model: Tag }],
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
