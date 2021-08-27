const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

const authentication = async function (req, res, next) {
  try {
    const { access_token } = req.headers;
    if (!access_token) throw { name: "Invalid token" };
    const payload = verifyToken(access_token);

    const dataExist = await User.findOne({
      where: {
        email: payload.email,
      },
    });

    if (dataExist) {
      req.user = {
        id: dataExist.id,
        email: dataExist.email,
      };

      next();
    } else {
      throw { name: "Invalid token" };
    }
  } catch (err) {
    next(err);
  }
};

module.exports = authentication;
