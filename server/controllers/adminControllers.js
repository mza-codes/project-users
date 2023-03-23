import asyncHandler from "../middlewares/asyncHandler.js";
import Admin from "../models/Admin.js";
import ErrorResponse from "../utils/errorResponse.js";
import { genRes } from "../utils/JSONResponse";

export const authenticateAdmin = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    throw new ErrorResponse(!email ? `Invalid Email` : `Invalid Password`, 400);

  const currentUser = Admin.findOne({ email });
  if (!currentUser) throw new ErrorResponse(`User does not exist!`, 404);

  const status = currentUser.comparePwd(password);
  if (status)
    return genRes(res, 200, true, "Login Success!", { user: currentUser });

  throw new ErrorResponse("Incorrect Password!", 401);
});
