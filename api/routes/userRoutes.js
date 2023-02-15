import express from "express";
import { handleCreateUsers } from "../controllers/userControllers.js";

const router = express.Router();

/** @param { /api/v1/users } */
router.post("/add/bulk-users", handleCreateUsers);
// router.get("/", handleCreateUsers);

const userRoutes = router;
export default userRoutes;