import "dotenv/config";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT ?? 5000;
const isProduction = process.env.NODE_ENV === "production";
let domain = `http://localhost:5173`;

if (isProduction) {
    domain = process.env?.CLIENT_URL
};

app.use(express.json());
app.use(cors({
    origin: domain
}));

app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
    res.send("<h2>Initial Response !</h2>");
});

app.listen(PORT, () => {
    console.log(`Server Started on PORT:${PORT}`);
});