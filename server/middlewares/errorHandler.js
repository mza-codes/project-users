import ErrorResponse from "../utils/errorResponse.js";

export default function errorHandler(err, req, res, next) {
  console.log("ERROR OCCURED !!!");
  console.log(err);
  let error = { ...err };
  error.message = err.message;

  if (err.message === "CastError") {
    const message = "Resource Not Found";
    err = new ErrorResponse(message, 404);
  }

  if (err.code === 11000) {
    const message = "Duplicate Field Value Entered";
    err = new ErrorResponse(message, 400);
  }

  if (err.message === "ValidationError") {
    const message = Object.values(err.errors)
      .map((error) => error.message)
      .join(", ");
    err = new ErrorResponse(message, 400);
  }

  res.status(err.statusCode || 500).json({
    success: false,
    message: error.message || "Server Error",
  });
}
