import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/User.js";
import ErrorResponse from "../utils/errorResponse.js";
import genRes from "../utils/JSONResponse.js";

export const createUser = asyncHandler(async (req, res, next) => {
  const newUser = await User.create(req?.body);
  return genRes(res, 201, true, { newUser });
});

export const validateUName = asyncHandler(async (req, res, next) => {
  const { username } = req?.params;
  if (!username) throw new ErrorResponse("Invalid Username!", 400);

  const user = await User.findOne({ username });
  if (user) {
    throw new ErrorResponse(
      "Username already exists, please provide a unique username!"
    );
  } else {
    return genRes(res, 200, true, "Username is Valid!");
  }
});
