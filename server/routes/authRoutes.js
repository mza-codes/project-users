import express from "express";
import {
  createUser,
  validateUName,
  authenticateUser,
} from "../controllers/authControllers.js";
import { isValidUser } from "../middlewares/isValidUser.js";

const router = express.Router();

/** @param { /api/v1/auth } */

router.post("/register", createUser);
router.post("/login", authenticateUser);

router.get("/check-user/:username", validateUName);

export { router as authRoutes };
