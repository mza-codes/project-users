import express from "express";
import {
    getBulkUsers,
    handleCreateUsers,
    handleDeletion
} from "../controllers/userControllers.js";

const router = express.Router();

/** @param { /api/v1/users } */
router.post("/add/bulk-users", handleCreateUsers);
router.delete("/delete/bulk-users", handleDeletion);
router.get("/get/bulk-users", getBulkUsers);

const userRoutes = router;
export default userRoutes;