const { Transaction, User, Tag, TransTag } = require("../models");

class Controller {
  static async viewTransactions(req, res, next) {
    try {
      const data = await Transaction.findAll({
        where: { UserId: req.user.id },
        include: [{ model: User }, { model: Tag }],
      });

      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async addTransaction(req, res, next) {
    const { name, amount, date, TagId } = req.body;
    try {
      const dataTrans = await Transaction.create({
        name,
        amount,
        date,
        UserId: req.user.id,
        currency: "IDR",
      });

      TransTag.create({
        TransactionId: dataTrans.id,
        TagId,
      });
      res.status(201).json(dataTrans);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
