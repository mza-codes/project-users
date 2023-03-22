import User from "../models/User.js";
import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "./asyncHandler.js";

export const isValidUser = asyncHandler(async (req, res, next) => {
  const email = req?.body?.email;
  if (!email) throw new ErrorResponse("Email must be provided!", 400);

  const currentUser = await User.findOne({ email });
  req._user = currentUser;
  next();
});
