import express, { urlencoded } from "express";
import cors from "cors";
import mongoose from "mongoose";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import path from "path";

import ENV from "./utils/validateEnv.js";
import errorHandler from "./middlewares/errorHandler.js";
import { log } from "./utils/logger.js";
import { authRoutes } from "./routes/authRoutes.js";

const __dirname = path.resolve();
let domain = `http://localhost:5173`;
log.warn("NODE ENV: ", process.env.NODE_ENV);

// Database Connection
const connectDB = async () => {
  await mongoose
    .connect(ENV.NEWDB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      dbName: "users-app",
    })
    .then(() => log.info("MongoDB Connection Success !"))
    .catch((err) => {
      log.error("MongoDB Connection Failed", err);
      process.exit();
    });
};

const app = express();

// Middleware
app.use(
  cors({
    origin: domain,
    credentials: true,
  })
);

app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

app.use(express.static("build"));
app.use(helmet());

// Routes
/** 
@OLD_Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/app', recordRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/super-user', adminRoutes); */

app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  log.warn("Accessing via *");
  res.sendFile(`${__dirname}/build/index.html`);
});

app.get("*", (req, res) => {
  res.redirect("/");
});

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  log.info(`Node Server Started On PORT: ${PORT}`);
});
