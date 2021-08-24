const { User } = require("../models");
const { createToken } = require("../helpers/jwt");
const { checkPassword } = require("../helpers/bcrypt");

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

      res.status(201).json(data);
    } catch (err) {
      console.log(err, "ERROR");
      next(err);
    }
  }

  static async login(req, res, next) {
    let { email, password } = req.body;
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
        res.status(200).json({ access_token });
      } else {
        throw { name: "Email/password incorrect" };
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
