import "dotenv/config";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import { PrismaClient } from '@prisma/client';
import path from "path";

const __dirname = path.resolve();
const isProduction = process.env.NODE_ENV === "production";

const PORT = process.env.PORT ?? 5000;
let logs = ['query', 'info', 'warn', 'error'];
let domain = `http://localhost:5173`;

if (isProduction) {
    domain = process.env?.CLIENT_URL;
    logs = [];
};

export const prisma = new PrismaClient({
    log: logs
});

const app = express();

app.use(express.json());
app.use(express.static("build"));
app.use(cors({
    origin: domain
}));

app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`);
});

app.get("*", (req, res) => {
    res.redirect("/");
});

app.listen(PORT, async () => {
    await prisma.$connect();
    console.log(`Server Started on PORT:${PORT}`);
});