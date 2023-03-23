import express from "express";
import { authenticateAdmin } from "../controllers/adminControllers.js";

const router = express.Router();

/** @param { /api/v1/admin } */

router.post("/auth/login", authenticateAdmin);

export { router as adminRoutes };
