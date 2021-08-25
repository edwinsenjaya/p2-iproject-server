const { Transaction, User, Tag, TransTag } = require("../models");
const convert = require("../helpers/convertCurrency");

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
    const { name, amount, date, currency, location, TagId } = req.body;
    let result;
    try {
      const dataTrans = await Transaction.create({
        name,
        amount,
        date,
        currency,
        location: location || "No location specified",
        UserId: req.user.id,
      });

      const dataUser = await User.findByPk(req.user.id);
      if (currency !== "IDR") {
        result = await convert(currency, "IDR", dataTrans.id);
      } else result = dataTrans.amount;

      await User.update(
        { balance: dataUser.balance - +result },
        { where: { id: dataUser.id } }
      );

      TransTag.create({
        TransactionId: dataTrans.id,
        TagId,
      });
      res.status(201).json(dataTrans);
    } catch (err) {
      next(err);
    }
  }

  static async editTransaction(req, res, next) {
    const transId = +req.params.id;
    const { name, amount, date } = req.body;
    try {
      const newData = await Transaction.update(
        {
          name,
          amount,
          date,
          UserId: req.user.id,
        },
        { where: { id: transId }, returning: true }
      );

      res.status(201).json(newData);
    } catch (err) {
      next(err);
    }
  }

  static async deleteTransaction(req, res, next) {
    const transId = +req.params.id;
    try {
      await Transaction.destroy({ where: { id: transId } });
      res.status(201).json({ message: "Transaction successfully deleted" });
    } catch (err) {
      next(err);
    }
  }

  static async convertCurrency(req, res, next) {
    const transId = +req.params.id;
    const { convertTo } = req.body;
    try {
      const dataTrans = await Transaction.findByPk(transId);
      if (!dataTrans) {
        throw { name: "NotFound" };
      } else {
        const convertFrom = dataTrans.currency;
        const result = await convert(convertFrom, convertTo, dataTrans.id);

        let newData = await Transaction.update(
          {
            currency: convertTo,
            amount: result,
          },
          {
            where: {
              id: transId,
            },
            returning: true,
          }
        );

        newData = newData[1][0];

        res.status(200).json({
          message: `Successfully convert from ${dataTrans.amount} ${convertFrom} to ${newData.amount} ${convertTo}`,
        });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
