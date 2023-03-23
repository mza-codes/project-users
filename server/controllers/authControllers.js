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

export const authenticateUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    throw new ErrorResponse(
      !email ? `Invalid Email!` : `Invalid Password!`,
      400
    );

  const user = await User.findOne({ email });
  console.log("Found USER!! ", user);

  if (!user) throw new ErrorResponse(`Invalid Credentials!`, 404);

  const status = await user.comparePwd(password);
  if (!status) throw new ErrorResponse("Invalid Credentials!", 401);

  if (user.verified) return genRes(res, 200, true, "Login Success!", { user });

  throw new ErrorResponse("Current User is not Verified by Admin!", 401);
});
