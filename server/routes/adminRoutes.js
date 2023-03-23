import express from "express";
import {
  authenticateAdmin,
  createAdmin,
  getAllUsers,
} from "../controllers/adminControllers.js";

const router = express.Router();

/** @param { /api/v1/admin } */

router.post("/auth/login", authenticateAdmin);
router.post("/auth/register", createAdmin);
router.get("/get-all-users", getAllUsers);

export { router as adminRoutes };
