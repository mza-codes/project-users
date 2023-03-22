import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/User.js";
import genRes from "../utils/JSONResponse.js";

export const createUser = asyncHandler(async (req, res, next) => {
  const newUser = await User.create(req?.body);
  return genRes(res, 201, true, { newUser });
});
