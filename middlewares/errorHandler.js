const errorHandler = function (err, req, res, next) {
  let name = err.name;
  let code = err.code || 500;
  let message = err.message || "Internal server error";

  if (name === "SequelizeValidationError") {
    const error = err.errors.map((el) => el.message);
    message = error;
    code = 400;
  } else if (name === "SequelizeUniqueConstraintError") {
    message = "Email already registered";
    code = 422;
  } else if (name === "NotFound") {
    message = "ID Not Found";
    code = 404;
  } else if (name === "Invalid token") {
    message = "Please log in first";
    code = 401;
  } else if (name === "Email/password incorrect") {
    message = "Email or password incorrect";
    code = 400;
  } else if (name === "NotAuthorized") {
    message = "You are not authorized";
    code = 403;
  }
  res.status(code).json({ message });
};

module.exports = errorHandler;
