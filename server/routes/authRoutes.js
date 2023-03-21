import express from "express";

const router = express.Router();

router.get("/register", (req, res, next) => {
    res.send("Hi there");
});

export { router as authRoutes };