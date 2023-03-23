import express from "express";
import {
  authenticateAdmin,
  createAdmin,
  getAllUsers,
  updateOneUser,
} from "../controllers/adminControllers.js";

const router = express.Router();

/** @param { /api/v1/admin } */

router.post("/auth/login", authenticateAdmin);
router.post("/auth/register", createAdmin);
router.get("/get-all-users", getAllUsers);
router.put("/update-user/:id", updateOneUser);

export { router as adminRoutes };
