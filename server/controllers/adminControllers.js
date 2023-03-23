import asyncHandler from "../middlewares/asyncHandler.js";
import Admin from "../models/Admin.js";
import User from "../models/User.js";
import ErrorResponse from "../utils/errorResponse.js";
import { genRes } from "../utils/JSONResponse.js";

export const authenticateAdmin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    throw new ErrorResponse(
      !email ? `Invalid Email!` : `Invalid Password!`,
      400
    );

  const currentUser = await Admin.findOne({ email });

  console.log("Found USER!! ", currentUser);
  if (!currentUser) throw new ErrorResponse(`Invalid Credentials!`, 404);

  const status = await currentUser.comparePwd(password);
  if (!status) throw new ErrorResponse("Invalid Credentials!", 401);

  if (currentUser.verified)
    return genRes(res, 200, true, "Login Success!", { user: currentUser });

  throw new ErrorResponse("Current User is not Verified by Admin!", 401);
});

export const createAdmin = asyncHandler(async (req, res, next) => {
  const currentUser = await Admin.create(req.body);
  const msg = `Admin Created with Email: ${req?.body?.email ?? "null"}`;
  return genRes(res, 201, true, `Admin created successfully!`, {
    user: currentUser,
  });
});

export const getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();
  if (users?.length <= 0) throw new ErrorResponse("No Users found in DB!", 404);
  return genRes(
    res,
    200,
    true,
    `Fetched ${users?.length ?? 0} Users from Database!`,
    { users }
  );
});
