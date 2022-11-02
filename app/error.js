const notFoundHandler = (req, res, next) => {
  const error = new Error("Resource not found.");
  error.status = 404;
  next(error);
};

const errorHandler = (error, req, res, next) => {
  if (error.status) {
    res.status(error.status).json({
      message: error.message,
    });
  }

  res.status(500).json({ message: "Something went wrong." });
};

module.exports = { notFoundHandler, errorHandler };
