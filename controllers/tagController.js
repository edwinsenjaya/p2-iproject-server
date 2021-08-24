const { Tag } = require("../models");

class Controller {
  static async viewTags(req, res, next) {
    try {
      const data = await Tag.findAll({
        include: { model: Transportation, where: { UserId: req.user.id } },
      });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
