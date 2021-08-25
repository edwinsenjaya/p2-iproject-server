const { User } = require("../models");
const { createToken } = require("../helpers/jwt");
const { checkPassword } = require("../helpers/bcrypt");
const sendMail = require("../helpers/nodemailer");

class Controller {
  static async register(req, res, next) {
    const { email, password, fullName, phoneNumber, address, budget, saving } =
      req.body;
    try {
      const data = await User.create({
        email,
        password,
        fullName,
        phoneNumber,
        address,
        budget,
        saving,
      });
      sendMail(
        data.email,
        "Welcome! 🎊",
        "Thank you for joining ExTrac!",
        "<h1>Thank you for joining ExTrac!</h1>"
      );
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body;

    try {
      if (email === "" || password === "")
        throw { name: "Email/password incorrect" };

      const data = await User.findOne({
        where: {
          email,
        },
      });

      if (!data) throw { name: "Email/password incorrect" };
      const check = checkPassword(password, data.password);
      if (check) {
        const access_token = createToken({
          id: data.id,
          email: data.email,
          fullName: data.fullName,
        });

        res
          .status(200)
          .json({ access_token, email: data.email, fullName: data.fullName });
      } else {
        throw { name: "Email/password incorrect" };
      }
    } catch (err) {
      next(err);
    }
  }

  static async addBudget(req, res, next) {
    const { addBudget } = req.body;
    try {
      const existingData = await User.findByPk(+req.user.id);

      const totalBudget = existingData.budget + +addBudget;
      const totalBalance = existingData.balance + +addBudget;

      let data = await User.update(
        {
          budget: totalBudget,
          balance: totalBalance,
        },
        { where: { id: req.user.id }, returning: true }
      );

      res.status(200).json(data[1][0]);
    } catch (err) {
      next(err);
    }
  }

  static async changeSaving(req, res, next) {
    const { saving } = req.body;
    try {
      let data = await User.update(
        {
          saving,
        },
        { where: { id: req.user.id }, returning: true }
      );

      res.status(200).json(data[1][0]);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
