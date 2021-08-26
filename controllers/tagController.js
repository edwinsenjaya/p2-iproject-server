const { Tag, Transaction, TransTag } = require("../models");

class Controller {
  static async viewTags(req, res, next) {
    try {
      const data = await Tag.findAll({
        include: { model: Transaction, where: { UserId: req.user.id } },
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async addTag(req, res, next) {
    const transId = +req.params.id;
    const { addedTag } = req.body;
    try {
      console.log(addedTag, "ATASIGFUDSKJF");
      const dataExist = await Tag.findByPk(+addedTag);

      if (dataExist) {
        await TransTag.create({ TransactionId: transId, TagId: addedTag });
        res.status(201).json({ message: "Tag successfully added" });
      } else throw { name: "NotFound" };
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
