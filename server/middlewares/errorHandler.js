const errorHandler = (err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || "Internal Server Error";

  switch (err.name) {
    case "SequelizeValidationError":
      status = 400;
      message = err.errors[0].message;
      break;
    case "Validate":
      status = 400;
      message = err.message;
      break;
  }

  res.status(status).json({ message: message });
};

module.exports = errorHandler;
