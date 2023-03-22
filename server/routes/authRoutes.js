import express from "express";
import { createUser } from "../controllers/authControllers.js";
import { isValidUser } from "../middlewares/isValidUser.js";

const router = express.Router();

router.get("/register", createUser);

router.get("/hi", isValidUser);

export { router as authRoutes };
