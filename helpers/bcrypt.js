const bcrypt = require("bcrypt");

const hashPassword = function (password) {
  return bcrypt.hashSync(password, 10);
};

const checkPassword = function (password, hashed) {
  return bcrypt.compareSync(password, hashed);
};

module.exports = { hashPassword, checkPassword };
